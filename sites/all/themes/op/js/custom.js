  jQuery(window).load(function() {

  jQuery(".view-blog-listing .view-content ul").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
	 responsiveBreakpoints: { 
	      portrait: { 
		changePoint:1024,
		visibleItems: 3,
		itemsToScroll: 1
	      }, 
		landscape: { 
		changePoint:640,
		visibleItems: 1,
		itemsToScroll: 1
	      },
		tablet: { 
		changePoint:768,
		visibleItems: 2,
		itemsToScroll: 1
	      }
	    }

 
    });
    
 });

    jQuery(document).on('ready', function() {
      jQuery(".Our-Members .view-content").slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
	 responsive: [
    	 {
     		 breakpoint: 1022,
     		 settings: {
       		 arrows: false,
        	slidesToScroll: 4,
        	 slidesToShow: 4
       		}
         },
         {
     		 breakpoint: 768,
    		 settings: {
       		 arrows: false,
	         slidesToScroll: 3,
        	 slidesToShow: 3
         	 }
          },
          {
     		 breakpoint: 480,
    		 settings: {
       		 arrows: false,
        	slidesToScroll: 2,
        	 slidesToShow: 2
         	 }
          }
      ]	

      });
    });


function changeBannerImg(){
 var mleft=(jQuery("#block-views-members-block-3 .views-field-field-image .field-content").width()-jQuery("#block-views-members-block-3 .views-field-field-image .field-content img").width())/2;
 jQuery("#block-views-members-block-3 .views-field-field-image .field-content img").css("margin-left",mleft+"px"); 
}
changeBannerImg();
jQuery(window).resize(function(){
changeBannerImg();
});

