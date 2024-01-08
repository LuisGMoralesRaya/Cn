/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
    $(window).load(function() {
      $('body.template-index .flickity-slider > div:nth-child(3) > div > div > div > a').after('<a href="/pages/sube-tu-foto" class="slideshow__button button">Personalizados</a>');
      $('html body .section .rte a[href="/pages/artistas-asociados"]').attr('style','margin: 10px 20px !important;');
      $('html body .section .rte a[href="/pages/artistas-asociados"]').after('<a href="/pages/asociados" style="clear: both !important; margin: 10px 20px !important;" class="button button--primary" data-live-text-setting="section.16132014584a8f8d20aaa.button_text/escape">Ver Artistas</a>');
      $('html body.template-index section[data-section-type="featured-collection"]').each(function(){
          var index_collection_button = $(this).find('.container header.section__header a.section__action-link.link').clone();
          $(this).find('.container:nth-child(2)').after(index_collection_button);
          $(this).find('.container:nth-child(2)+a > svg').remove();
          $(this).find('.container:nth-child(2)+a').removeClass('section__action-link');
	      $(this).find('.container:nth-child(2)+a').removeClass('link');
      });
      $(document).find('body.template-product div.video-wrapper > iframe').each(function(){
           var video_product_original_url = $(this).attr('src');
           var url_length = video_product_original_url.length;
           var url_trimmed = video_product_original_url.replace(video_product_original_url.substring(video_product_original_url.indexOf("?"), url_length), "");
      	   var video_product_url_ok = url_trimmed+'?iv_load_policy=3&controls=0&enablejsapi=1&loop=1&modestbranding=1&origin=https%3A%2F%2Fcanvaslab.com&showinfo=0&fs=0&rel=0&playsinline=1&vq=hd1080p60&mute=1';
		   $(this).attr('src',video_product_url_ok);
        }
      );
    });

    function ready() {
      setTimeout(function() {
	      $('#account-popover > div > div > a:nth-last-child(1)').before('<a class="popover__link-item" href="pages/wishlist">Mis wishlists</a>');
		  
      }, 123);
    }
	
    $(document).ready(function() {
      $('#shopify-section-header > section > nav > div > div > ul > li:nth-child(11) a').append('<img src="https://cdn.shopify.com/s/files/1/0258/6276/6677/files/icono_regalo.svg?v=1638829548" style="height: 15px !important;margin: 6px 0 0 9px; position: relative !important;">');
      $('#mobile-menu > div > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(11) a').append('<img src="https://cdn.shopify.com/s/files/1/0258/6276/6677/files/icono_regalo.svg?v=1638829548" style="height: 15px !important;margin: 6px 0 0 9px; position: relative !important;">');
      $('.nav-bar__linklist > li.nav-bar__item:nth-child(3) > .mega-menu .mega-menu__column:nth-child(3) > ul.mega-menu__linklist:nth-child(2)').before('<div id="feat_canvaslab"><a href="/collections/kits-de-collage"><img loading="lazy" src="https://cdn.shopify.com/s/files/1/0258/6276/6677/files/Kits-de-collage---homepage.png?v=1683672132"><div>Conoce nuestros Kits de Collage</div></a></div>');
      $('.mobile-menu__section:nth-child(1) > ul.mobile-menu__nav > li.mobile-menu__nav-item:nth-last-child(1)').after('<div id="feat_canvaslab"><a href="/collections/kits-de-collage"><img loading="lazy" src="https://cdn.shopify.com/s/files/1/0258/6276/6677/files/Kits-de-collage---homepage.png?v=1683672132"><div>Conoce nuestros Kits de Collage</div></a></div>');
    });

    /*document.addEventListener("DOMContentLoaded", ready);*/