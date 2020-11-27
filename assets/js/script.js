$(document).ready(function() {
    var widget = SC.Widget(document.getElementById('soundcloud_widget'));
    // widget.bind(SC.Widget.Events.READY, function() {

    //     alert('ready');
    // });





    widget.bind(SC.Widget.Events.READY, function() {

        alert('gggggggg');

        
        
           
    });


    $('#player').click(function() {
        widget.toggle();
        // $(this).attr('class', 'fa fa-pause fa-3x');
      });



      
    

    //   $('#pause').click(function() {
    //   widget.pause();
    //   });

    //   $('#backward').click(function() {
    //     widget.prev();
    //     });

    //     $('#forward').click(function() {
    //         widget.next();
    //         })
    




  
  });