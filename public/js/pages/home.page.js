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
        AOS.init();

        // $('.search button').on('click', function(e){
        //    e.preventDefault();
        //    $('.mainnav').removeClass('active');
        //    if($('.search-bar').hasClass('active')){
        //      $('.search-bar').removeClass('active');
        //   } else {
        //      $('.search-bar').addClass('active');
        //   }
        // });

        // $('.nav-menu').on('click', function(e){
        //    e.preventDefault();
        //    $('.search-bar').removeClass('active');
        //    if($('.mainnav').hasClass('active')){
        //      $('.mainnav').removeClass('active');
        //   } else {
        //      $('.mainnav').addClass('active');
        //   }
        // });
    });
})();
