$(document).ready(function() {
    var widget = SC.Widget(document.getElementById('soundcloud_widget'));
    widget.bind(SC.Widget.Events.READY, function() {
    });
    $('#player').click(function() {
      widget.toggle();

      $('#pause').click(function() {
      widget.pause();
      });

      $('#backward').click(function() {
        widget.prev();
        });

        $('#forward').click(function() {
            widget.next();
            })
    });
  });