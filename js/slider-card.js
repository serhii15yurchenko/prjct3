// document.addEventListener( 'DOMContentLoaded', function () {
// new Splide('.product-gallery', {
// type: 'fade',
// rewind: true,
// pagination: false,
// arrows: true,
// });
// new Splide('.product-gallery__thumbs', {
// rewind: true,
// pagination: false,
// cover: true,
// isNavigation: true,
// arrows: false,
// });

// '.product-gallery'.sync('.product-gallery__thumbs');
// '.product-gallery'.mount();
// '.product-gallery__thumbs'.mount();
//   } );

document.addEventListener( 'DOMContentLoaded', function () {
      var main = new Splide( '.product-gallery', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : true,
      } );
    
      var thumbnails = new Splide( '.product-gallery__thumbs', {
        fixedWidth  : 90,
        fixedHeight : 100,
        gap         : 10,
        arrows    : false,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        breakpoints : {
          600: {
            fixedWidth : 60,
            fixedHeight: 80,
            gap         : false,
          },
        },
      } );
    
      main.sync( thumbnails );
      main.mount();
      thumbnails.mount();
    } );
