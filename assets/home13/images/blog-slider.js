/**
 * blog-slider.js
 * 个人博客部分的背景图轮播控制
 * 支持：左右按钮切换、进度条联动、自动每30秒切换
 */

(function initBlogSlider() {
  const SECTION_SELECTOR = '[data-blog-photo-section]';

  function initSection(section) {
    // 避免重复初始化
    if (section.dataset.sliderReady === 'true') return;
    section.dataset.sliderReady = 'true';

    const slides = section.querySelectorAll('[data-blog-photo-slide]');
    const dots = section.querySelectorAll('[data-blog-photo-dot]');
    const prevBtn = section.querySelector('[data-blog-photo-prev]');
    const nextBtn = section.querySelector('[data-blog-photo-next]');

    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    const INTERVAL = 30000; // 30秒

    // 切换到指定索引
    function setActive(index) {
      // 归一化索引
      const normalized = ((index % slides.length) + slides.length) % slides.length;
      currentIndex = normalized;

      // 更新图片
      slides.forEach((img, i) => {
        img.classList.toggle('is-active', i === currentIndex);
      });

      // 更新进度点
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === currentIndex);
      });
    }

    // 下一张
    function next() {
      setActive(currentIndex + 1);
      resetTimer();
    }

    // 上一张
    function prev() {
      setActive(currentIndex - 1);
      resetTimer();
    }

    // 重置定时器
    function resetTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      timer = setInterval(next, INTERVAL);
    }

    // 停止定时器（页面不可见时）
    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // 绑定事件
    if (prevBtn) {
      prevBtn.addEventListener('click', prev);
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', next);
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-blog-photo-dot') || '0', 10);
        setActive(index);
        resetTimer();
      });
    });

    // 页面可见性变化：切回时重置定时器，切出时停止
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        stopTimer();
      } else {
        resetTimer();
      }
    });

    // 启动定时器
    resetTimer();

    // 暴露控制接口（方便调试）
    section._slider = { setActive, next, prev, resetTimer, stopTimer };
  }

  // 初始化已存在的 section
  function initAll() {
    document.querySelectorAll(SECTION_SELECTOR).forEach(initSection);
  }

  // 监听 DOM 变化（Astro 切换页面后重新初始化）
  const observer = new MutationObserver(() => {
    initAll();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // 初次加载初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // Astro 页面切换后重新初始化
  document.addEventListener('astro:after-swap', initAll);
})();