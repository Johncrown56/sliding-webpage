$(document).ready(function(){
      
      


      //Animate Slide
      let arr = document.getElementsByClassName('slide');
      let cnt = 1;

      $('.current').animate({
            width : '100%'
      }, 1000);
      $('.bottom-text').html($('.current').attr('title'));
      $('.bottom-text').animate({
            bottom: 50,
            opacity: 1
      },
      700);
      // console.log($('.current').attr('title'));
      
      function doSlides() {
            $('.current').animate({
                  width : 0
            }, 1000);
             $('.bottom-text').animate({
                  bottom : -120,
                  opacity : 0
             }, 500);
            $('.current').removeClass('current');

            let xcnt = 0;
            $('.slide').each(function(){

                  let me = $(this);
                  if(xcnt == cnt){
                        me.addClass('current');
                        me.animate({
                              width : '100%'
                        }, 1000);
                        $('.bottom-text').html($('.current').attr('title'));

                        $('.bottom-text').animate({
                              bottom: 50,
                              opacity : 1
                        },
                        700);

                  }
                  xcnt = xcnt +1;
            });
            // $('.slide')[1].animate({
            //       width : '100%'
            // }, 1000);


            cnt = cnt + 1;
            if (cnt == arr.length) {
                  cnt = 0;
            }
      }

      setInterval(doSlides, 8000);

});