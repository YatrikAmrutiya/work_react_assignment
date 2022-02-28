jQuery("#art").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 300,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});
jQuery("#Galleries").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 30,

   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 300,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 3
    },

    1366: {
      items: 5
    }
  }
});
jQuery(".Galleries").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 30,

   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 300,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 3
    },

    1366: {
      items: 5
    }
  }
});
jQuery("#featured").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 30,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 300,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 4
    }
  }
});
jQuery(".twoitem").owlCarousel({
 /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  dots: false,

  nav: true,
   
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});
jQuery(".singleitem").owlCarousel({
 /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  dots: false,

  nav: true,
   
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});
jQuery("#carousel2").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,

  smartSpeed: 800,
  nav: true,
   
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});

  $(document).ready(function(){
  $(".filter-menu").click(function(){
    $(".sidebar").addClass("active");
  });
});
  
  $(document).ready(function(){
  $(".filter-by-close-menu").click(function(){
    $(".sidebar").removeClass("active");
  });
});
  /////// j

//// filter accordion
function accordion(section, heading, list) {
  $(section).each(function() {
    var that = this,
        listHeight = $(this).find(list).height();

    $(this).find(heading).click(function() {
      $(this).toggleClass('plus minus');
      $(that).find(list).slideToggle(250);
    });
  });
};

accordion('.filter-item', '.filter-item-inner-heading', '.filter-attribute-list');
