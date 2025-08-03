console.clear();
initslider();
function initslider() {
    const elPrevButton = document.querySelector(".slider #prev");
    const elNextButton = document.querySelector(".slider #next");

    const elImages = Array.from(document.querySelectorAll(".slider .image"));

    let state = {
        photo: 0
    };

    function send(event) {
        const elActives = document.querySelectorAll(".slider [data-active]");

        Array.from(elActives).forEach(el => el.removeAttribute("data-active"));

        switch (event) {
            case "PREV":
                state.photo--;
                break;
            case "NEXT":
                state.photo++;
                break;
            default:
                state.photo = +event;
                break;
        }

        var len = elImages.length;
        state.photo = Math.max(0, Math.min(state.photo, len - 1));

        Array.from(
            document.querySelectorAll(`.slider [data-key="${state.photo}"]`)
        ).forEach(el => {
            el.setAttribute("data-active", true);
        });
    }
    elPrevButton.addEventListener("click", () => {
        send("PREV");
    });

    elNextButton.addEventListener("click", () => {
        send("NEXT");
    });

    const elStatus = Array.from(document.querySelectorAll(".slider .stat"));
    elStatus.forEach(stat => {
        stat.addEventListener("click", () => {
            send(stat.dataset.key);
        });
    });
    send(0);
}
