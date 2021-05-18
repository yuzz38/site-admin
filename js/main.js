$(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    $('.btn-next').on('click', function(e){
        e.preventDefault();
            $('.rightBlock-people').addClass('rightBlock-people--active');
            $('.people-wrapper-2').addClass('people-wrapper-2-active');
        });
    $('.btn-prev').on('click', function(e){
        e.preventDefault();
            $('.rightBlock-people').removeClass('rightBlock-people--active');
            $('.people-wrapper-2').removeClass('people-wrapper-2-active');
    });
    var lagre = `<div class="about-stuff">
                                <div class="about-stuffName">
                                    <img src="img/people1.png">
                                    <p>Savannah Nguyen</p>
                                </div>
                                <div class="about-stuffDate">
                                    <p>1/15/12</p>
                                </div>
                                <div class="about-stuffProfit">
                                    <p>$328.85</p>
                                </div>
                                <div class="about-stuffLos">
                                    <p>$779.58</p>
                                </div>
                                <div class="about-stuffPhone">
                                    <p>(603) 555-0123</p>
                                </div>
                                <div class="about-stuffMore">
                                    <p><a href="#">More info</a></p>
                                </div>
                            </div>`;
     $('.add').on('click', function(e){
        e.preventDefault();
            $('.people-wrapper').append(lagre);
            
    });
     $('.header-mobile-btn').on('click', function(e){
        e.preventDefault();
            $('.leftBlock').toggleClass('leftBlock--active');
            
        });
      $('.rightBlock-people').on('click', function(e){
        e.preventDefault();
            $('.leftBlock').removeClass('leftBlock--active');
            
        });
       $('.rightBlock-object').on('click', function(e){
        e.preventDefault();
            $('.leftBlock').removeClass('leftBlock--active');
            
        });
      $('.more-info').on('click', function(e){
        e.preventDefault();
            $('.about-stuffName').addClass('about-stuffName--active');
            $('.about-stuffMore').addClass('about-stuffMore--active');
            $('.about-stuffDate').addClass('about-stuffPhone--active');
            $('.about-stuffProfit').addClass('about-stuffPhone--active');
            $('.about-stuffLos').addClass('about-stuffPhone--active');
            $('.about-stuffPhone').addClass('about-stuffPhone--active');
            
        }); 
});