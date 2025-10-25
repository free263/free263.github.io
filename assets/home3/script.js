document.addEventListener('DOMContentLoaded', function() {
    createParticles();
});

/**
 * Creates animated particles for the background.
 */
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (2 + Math.random() * 3) + 's';
        container.appendChild(particle);
    }
}

/**
 * Opens the project modal.
 * @param {HTMLElement} card The clicked project card element.
 */
function openProject(card) {
    const id = card.dataset.id;
    const title = card.dataset.title;
    const url = card.dataset.url;
    
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIframe = document.getElementById('modalIframe');
    const visitBtn = document.getElementById('visitBtn');
    const loading = document.getElementById('loading');
    
    const project = projects.find(p => p.id === id);

    modalTitle.innerHTML = `<span style="font-size:1.5rem;">${project?.icon || ''}</span> ${title}`;
    
    if (id !== 'contact') {
        visitBtn.href = url;
        visitBtn.style.display = 'flex';
    } else {
        visitBtn.style.display = 'none';
    }
    
    modal.classList.add('show');
    loading.style.display = 'flex';
    modalIframe.style.opacity = '0';
    
    modalIframe.onload = function() {
        loading.style.display = 'none';
        modalIframe.style.opacity = '1';
    };
    
    modalIframe.src = url;
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the project modal.
 */
function closeModal() {
    document.getElementById('modal').classList.remove('show');
    const modalIframe = document.getElementById('modalIframe');
    if (modalIframe) {
      modalIframe.src = '';
    }
    document.body.style.overflow = 'auto';
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
}

function logAction(action, contactId) {
    const formData = new FormData();
    formData.append('action', action);
    formData.append('contactId', contactId);
    
    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            console.error('Failed to log action:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error logging action:', error);
    });
}

function handleContactClick(element) {
    const contactItemElement = element.closest('.contact-item');
    const contactId = contactItemElement.dataset.id;
    const contact = contactItems.find(item => item.id === contactId);

    if (contact) {
        logAction('log_contact_click', contactId);
        
        // 如果是Telegram，直接跳转链接
        if (contact.id === 'telegram' && !contact.isExternal) {
            window.open(contact.link, '_blank');
            return;
        }
        
        // 其他联系方式显示modal
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modalTitle');
        const modalImage = document.getElementById('modalImage');
        const copyBtnContainer = document.getElementById('copyBtnContainer');
        const copyBtn = document.getElementById('copyBtn');
        const loading = document.getElementById('loading');

        modalTitle.textContent = contact.label;
        loading.style.display = 'flex';
        modalImage.style.display = 'none';
        copyBtnContainer.style.display = 'none';

        if (contact.imageUrl) {
            modalImage.src = contact.imageUrl;
            modalImage.onload = () => {
                loading.style.display = 'none';
                modalImage.style.display = 'block';
            };
            modalImage.onerror = () => {
                loading.textContent = '图片加载失败';
            };
        } else {
            loading.style.display = 'none';
        }
        
        if (contact.value) {
            copyBtnContainer.style.display = 'block';
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(contact.value).then(() => {
                    showToast('内容已复制！');
                    logAction('log_copy_action', contactId);
                }).catch(err => {
                    console.error('复制失败', err);
                });
            };
        }

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: { enable: true, speed: 3 }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } }
        },
        retina_detect: true
    });
});
