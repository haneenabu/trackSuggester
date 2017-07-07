$(document).ready(function() {
  $("#formTrack").submit(function(event) {
    var startInput = $("#start").val();
    var learnInput = $("#learn").val();
    var futureInput =$("input:radio[name=future]:checked").val();
    var langInput = $("#lang").val();
    var experienceInput = $("#experience").val();

    $(".learn").text(learnInput);
    if (experienceInput === 'Yes'){
      $("#experienceYes").show();
      $("#experienceNo").hide();
    }else {
      $("#experienceNo").show();
      $("#experienceYes").hide();
    }

    if(learnInput === 'Front-End Programming' && futureInput === 'Business Owner'){
      $("#cSharp").show();
      $("#css").show();
      $("#ruby").show();
      $("#php").hide();
      $("#java").hide();
    }
    else if(learnInput === 'Front-End Programming' && futureInput === 'Developer Programmer'){
      $("#cSharp").hide();
      $("#css").show();
      $("#ruby").show();
      $("#php").hide();
      $("#java").show();
    }
    else if (learnInput === 'Back-End Programming' && futureInput === 'Business Owner') {
      $("#cSharp").show();
      $("#css").show();
      $("#ruby").hide();
      $("#php").hide();
      $("#java").show();
    }
    else if (learnInput === 'Back-End Programming' && futureInput === 'Developer Programmer') {
      $("#cSharp").hide();
      $("#css").hide();
      $("#ruby").show();
      $("#php").show();
      $("#java").show();
    }
    else {
      $("#error").show();
    }


    event.preventDefault();
  });
});
