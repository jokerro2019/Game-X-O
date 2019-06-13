    $(document).ready(function(){

        

        var $box = $('.box');
        var counter = 0;
        var x = $('.win-x');
        var o = $('.win-o');
        var draw = $('.draw');
        $box.on('click', function(event){

            if ($('.field-1').hasClass("js-x") &&  $('.field-2').hasClass("js-x") &&  $('.field-3').hasClass("js-x")){  
                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-4').hasClass("js-x") &&  $('.field-5').hasClass("js-x") &&  $('.field-6').hasClass("js-x")){

                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-7').hasClass("js-x") &&  $('.field-8').hasClass("js-x") &&  $('.field-9').hasClass("js-x")){

                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-1').hasClass("js-x") &&  $('.field-4').hasClass("js-x") &&  $('.field-7').hasClass("js-x")){

                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-2').hasClass("js-x") &&  $('.field-5').hasClass("js-x") &&  $('.field-8').hasClass("js-x")){

                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-3').hasClass("js-x") &&  $('.field-6').hasClass("js-x") &&  $('.field-9').hasClass("js-x")){

                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-1').hasClass("js-x") &&  $('.field-5').hasClass("js-x") &&  $('.field-9').hasClass("js-x")){

                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-3').hasClass("js-x") &&  $('.field-5').hasClass("js-x") &&  $('.field-7').hasClass("js-x")){

                x.css( "display", "block" );
                (document).querySelector('.audio').play();
            } 
            else if ($('.field-1').hasClass("js-o") &&  $('.field-2').hasClass("js-o") &&  $('.field-3').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-4').hasClass("js-o") &&  $('.field-5').hasClass("js-o") &&  $('.field-6').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-7').hasClass("js-o") &&  $('.field-8').hasClass("js-o") &&  $('.field-9').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-1').hasClass("js-o") &&  $('.field-4').hasClass("js-o") &&  $('.field-7').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-2').hasClass("js-o") &&  $('.field-5').hasClass("js-o") &&  $('.field-8').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-3').hasClass("js-o") &&  $('.field-6').hasClass("js-o") &&  $('.field-9').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-1').hasClass("js-o") &&  $('.field-5').hasClass("js-o") &&  $('.field-9').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if ($('.field-3').hasClass("js-o") &&  $('.field-5').hasClass("js-o") &&  $('.field-7').hasClass("js-o")){

                o.css( "display", "block" );
                (document).querySelector('.audio').play();
            } else if (counter == 9){

                draw.css( "display", "block" );
                (document).querySelector('.audio').play();
            }
            
            
            
            
            
            else {


                //start game
                if ( counter%2 == 0){
                    if ($(this).hasClass("js-x") ||  $(this).hasClass("js-o")) {
                        console.log('не выйдет')
                    } else {
                     $(this).addClass('js-x');
                     counter++;
                     console.log(counter);
                    }
                    
                } else {
                 if ($(this).hasClass("js-x") ||  $(this).hasClass("js-o")) {
                     console.log('не выйдет')
                 } else {
                     $(this).addClass('js-o');
                     counter++;
                     console.log(counter);
                 }
                }
                //end game



            }
             
           
        




    })
    });

  