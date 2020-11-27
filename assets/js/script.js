$(document).ready(function() {
    var widget = SC.Widget(document.getElementById('soundcloud_widget'));
    widget.bind(SC.Widget.Events.READY, function() {
    });
    $('#player').click(function() {
        widget.toggle();
        $(this).attr('class', 'fa fa-pause fa-3x');
      });

    });

    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
            });
        });
    });