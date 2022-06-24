export default () => {
    const main = document.getElementById('main-menu');
    const list = document.getElementById('responsive-list');
    const closeButton = document.getElementById('close-button');

    if (!(main && list && closeButton)) {
        return;
    }

    const closeAction = ['opacity-0', 'scale-95', 'hidden'];
    const openAction = ['opacity-100', 'scale-100', 'shown'];

    main.onclick = () => {
        if (list.classList.contains('hidden')) {
            list.classList.remove(...closeAction);
            list.classList.add(...openAction);
        }
    };

    closeButton.onclick = () => {
        if (list.classList.contains('shown')) {
            list.classList.remove(...openAction);
            list.classList.add(...closeAction);
        }
    }
};
