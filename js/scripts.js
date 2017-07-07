$(document).ready(function() {
  $("#formTrack").submit(function(event) {
    var startInput = $("#start").val();
    var learnInput = $("#learn").val();
    var futureInput =$("input:radio[name=future]:checked").val();
    var langInput = $("#lang").val();
    var experienceInput = $("#experience").val();

    $(".learn").text(learnInput);
    if(learnInput === 'Front-End Programming'){
      $("#cSharp").show();
    }
    event.preventDefault();
  });
});
