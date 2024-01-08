class StickyRibbonSpacer extends HTMLElement {
    constructor() {
        super();

        // Set spacer properties
        this.style.display = 'block';
        this.style.height = 0;
        var headerHeight = 0;

        const ribbons = document.querySelectorAll('.header__sticky-ribbon--wrapper');
        ribbons.forEach(ribbon => {
            headerHeight += ribbon.clientHeight;
        });
        this.style.height = `${headerHeight}px`;

        // Hide the button to close the ribbon
        let $closeRibbonButton = document.querySelector('.header__sticky-ribbon--wrapper .header__tape-close');
        $closeRibbonButton.classList.add('d-none');

        // Delete cookies that cancel the ribbon
        let cookie = theme.Cookie.get('header-tape');

        if (cookie && cookie === 'off') {
            theme.Cookie.deleteCookie('header-tape');
        }
    }
}
customElements.define('sticky-ribbon-spacer', StickyRibbonSpacer);