(function() {
    function loadCarouselForProducts() {
        $('#owl-products').owlCarousel({
            loop: true,
            autoPlay: true,
            rewindNav: false
        });
    }

    $(function() {
        loadCarouselForProducts();
    });

    $(function(){
      AOS.init();
   });

})();
