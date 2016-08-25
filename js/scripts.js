//back end
var css = 0
var php = 0
var jva = 0




//frnt end
$(document).ready(function() {
  $("#button").click(function() {

    var end = $("#end").val();
      if (end === "front") {
      css += 1;
    }else if (end === "back") {
      php += 1;
    }else {
      jva +=1;
    }
    var preference = $("#surveyquestion2").val();
      if (preference === "design1") {
      css += 1;
    }else {
      jva +=1;
    }
    var career = $("#surveyquestion3").val();
      if (career === "design2") {
      css += 1;
    }else if (end === "development2") {
      jva += 1;
    }else {
      php +=1;
    }
    if (jva > php && jva > css) {
    $("#java").show();
    }
    if (php > jva && php > css) {
    $("#php").show();
    }
    if (css > php && jva < css) {
    $("#css").show();
    }



  });

});
