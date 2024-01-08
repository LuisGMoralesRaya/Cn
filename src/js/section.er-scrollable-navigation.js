(function ($) {

  'use strict';

  class CarouselScrollableNav extends HTMLElement {
    constructor() {
      super();

      this.load();
    }

    load() {
      this.$container = $(this);

      var _ = this,
      $carousel = this.$container.find('[data-js-carousel]'),
      $slick = $carousel.find('[data-js-carousel-slick]');

      function initialize() {
        // _.$slick = $slick;

        $slick.slick({
          infinite: false,
          centerMode: false,
          arrows: false,
          variableWidth: false,
          slidesToShow: 4,
          slidesToScroll: 4
        });
      };

      if ($slick.length) {
        theme.AssetsLoader.loadManually([
          ['styles', 'plugin_slick'],
          ['scripts', 'plugin_slick']
        ],
          function () {
            initialize();
          });
      }
    }

    disconnectedCallback() {
      if (this.$slick) {
        this.$slick.slick('destroy').off();
        this.$slick = null;

        $window.unbind('theme.resize.carousel-scrolla-nav');
      }
    }
  }

  theme.AssetsLoader.onPageLoaded(function () {
    customElements.define('carousel-scrolla-nav', CarouselScrollableNav);
  });
})(jQueryTheme);