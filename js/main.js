$(document).ready(function () {

    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    
        /* Get iframe src attribute value i.e. YouTube video url
        and store it in a variable */
        var url1 = $("#cartoonVideo1").attr('src');
        var url2 = $("#cartoonVideo2").attr('src');
        
        var url3 = $("#cartoonVideo3").attr('src');
        var url4 = $("#cartoonVideo4").attr('src');
        
        /* Assign empty url value to the iframe src attribute when
        modal hide, which stop the video playing */
        $("#my_model_1").on('hide.bs.modal', function(){
            $("#cartoonVideo1").attr('src', '');
        });
        $("#my_model_2").on('hide.bs.modal', function(){
            $("#cartoonVideo2").attr('src', '');
        });
        $("#my_model_3").on('hide.bs.modal', function(){
            $("#cartoonVideo3").attr('src', '');
        });
        $("#my_model_4").on('hide.bs.modal', function(){
            $("#cartoonVideo4").attr('src', '');
        });
        
        /* Assign the initially stored url back to the iframe src
        attribute when modal is displayed again */
        $("#my_model_1").on('show.bs.modal', function(){
            $("#cartoonVideo1").attr('src', url1);
        });
        
        $("#my_model_2").on('show.bs.modal', function(){
            $("#cartoonVideo2").attr('src', url2);
        });
        $("#my_model_3").on('show.bs.modal', function(){
            $("#cartoonVideo3").attr('src', url1);
        });
        
        $("#my_model_4").on('show.bs.modal', function(){
            $("#cartoonVideo4").attr('src', url2);
        });

        // Events Modal JS code
        var url_1 = $("#event_video_1").attr('src');
        $("#event_1").on('hide.bs.modal', function(){
            $("#event_video_1").attr('src', '');
        });
        $("#event_1").on('show.bs.modal', function(){
            $("#event_video_1").attr('src', url_1);
        });

        var url_2 = $("#event_video_2").attr('src');
        $("#event_2").on('hide.bs.modal', function(){
            $("#event_video_2").attr('src', '');
        });
        $("#event_2").on('show.bs.modal', function(){
            $("#event_video_2").attr('src', url_2);
        });
       
        var url_3 = $("#event_video_3").attr('src');
        $("#event_3").on('hide.bs.modal', function(){
            $("#event_video_3").attr('src', '');
        });
        $("#event_3").on('show.bs.modal', function(){
            $("#event_video_3").attr('src', url_3);
        });
       
        var url_4 = $("#event_video_4").attr('src');
        $("#event_4").on('hide.bs.modal', function(){
            $("#event_video_4").attr('src', '');
        });
        $("#event_4").on('show.bs.modal', function(){
            $("#event_video_4").attr('src', url_4);
        });
       





        
        // Events isotope categorisation
        let $btns = $('.event-area .button-group button');


    $btns.click(function (e) {

        $('.event-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.event-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    
    

});