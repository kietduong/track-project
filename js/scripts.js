$(document).ready(function() {
  $("form#track").submit(function(event) {
    var kind = $("select#end").val();
    $("#button").click(function() {
       $("#css").hide();
       $("#java").hide();
       $("#php").hide();
    });

    if(kind) {
      if(kind === "front") {
         $("#css").show();
      }
      else if(kind === "back") {
         $("#php").show();
      }
      else {
         $("#java").show();
      }
    }

  event.preventDefault();

  });

});
