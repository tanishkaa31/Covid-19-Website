$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');  /*font-awesome bars icon changes to cross icon on click */
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){  //on scrolling/clicking on the hamburger menu, it should collapse and return to its original form
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>0){
            $('.scroll-top').show();
        }else{
            $('.scroll-top').hide();
        }

        //scrollspy
        $('section').each(function(){

            let height = $(this).height();
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
            
            console.log(offset, height, top);
      
            if(top > offset && top < (offset + height)){
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
            
      
          });
      
          });

          //smooth scrolling

          $('a[href*="#"]').on('click', function(event){
              event.preventDefault(); //prevents the default action
              $('html, body').animate( 
                  {scrollTop: $($(this).attr('href')).offset().top, },            
              400, 'linear')  //animation | speed in ms | easing function
          })
        
    });


