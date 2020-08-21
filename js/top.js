$(function(){
    /*スライドショー */
    $('.nav-btn.next').click(function(){

    });
    /*質問jQuery練習*/
    $('.each').click(function(){
        let $answer = $(this).find('.text-answer');
        if($answer .hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp();
        }else{
            $answer.addClass('open');
            $answer.slideDown();
        }
    });
    /*モーダル練習 */

    $('#button').click(function(){
        $('.contact-modal').fadeIn();
    });
    $('.close.modal').click(function(){
        $('.contact-modal').fadeOut();
    });
    
});