$(document).ready(function() {
  var nameInput = prompt ("Please enter your name: ");

  $("#formTrack").submit(function(event) {
    var startInput = $("#start").val();
    var learnInput = $("#learn").val();
    var futureInput =$("input:radio[name=future]:checked").val();
    var langInput = $("#lang").val();
    var experienceInput = $("#experience").val();
    $(".learn").text(learnInput);
    $(".lang").text(langInput);
    document.getElementById('name').innerHTML = "Hello " + nameInput + "! Checkout the tracks we chose for you!";
    //conditional statement just for the users experience
    if (experienceInput === 'Yes'){
      $("#experienceYes").show();
      $("#experienceNo").hide();
    }else {
      $("#experienceNo").show();
      $("#experienceYes").hide();
    }

    // if (langInput === 'Java'){
    //   $("#cSharp").show();
    //   $("#css").show();
    //   $("#ruby").show();
    //   $("#php").hide();
    //   $("#java").hide();
    // }
    //conditional statements for the learn and future selections
    if(learnInput === 'Front-End Programming' && futureInput === 'Business Owner' && langInput === 'Java'){
      $("#cSharp").show();
      $("#css").show();
      $("#ruby").hide();
      $("#php").hide();
      $("#java").show();
    }
    else if(learnInput === 'Front-End Programming' && futureInput === 'Business Owner' && langInput === 'CSS'){
      $("#cSharp").show();
      $("#css").show();
      $("#ruby").show();
      $("#php").hide();
      $("#java").hide();
    }
    else if(learnInput === 'Front-End Programming' && futureInput === 'Business Owner' && langInput === 'PHP'){
      $("#cSharp").show();
      $("#css").show();
      $("#ruby").hide();
      $("#php").show();
      $("#java").hide();
    }
    else if(learnInput === 'Front-End Programming' && futureInput === 'Developer Programmer' && (langInput === 'Java'|| langInput === 'CSS')){
      $("#cSharp").hide();
      $("#css").show();
      $("#ruby").show();
      $("#php").hide();
      $("#java").show();
    }
    else if(learnInput === 'Front-End Programming' && futureInput === 'Developer Programmer' && langInput === 'PHP'){
      $("#cSharp").hide();
      $("#css").show();
      $("#ruby").show();
      $("#php").show();
      $("#java").hide();
    }
    else if (learnInput === 'Back-End Programming' && futureInput === 'Business Owner' && (langInput === 'CSS' || langInput === 'Java')) {
      $("#cSharp").show();
      $("#css").show();
      $("#ruby").hide();
      $("#php").hide();
      $("#java").show();
    }
    else if (learnInput === 'Back-End Programming' && futureInput === 'Business Owner' && langInput === 'PHP') {
      $("#cSharp").show();
      $("#css").hide();
      $("#ruby").hide();
      $("#php").show();
      $("#java").show();
    }
    else if (learnInput === 'Back-End Programming' && futureInput === 'Developer Programmer' && (langInput === 'PHP' || langInput === 'Java')) {
      $("#cSharp").hide();
      $("#css").hide();
      $("#ruby").show();
      $("#php").show();
      $("#java").show();
    }
    else if (learnInput === 'Back-End Programming' && futureInput === 'Developer Programmer' && langInput === 'CSS') {
      $("#cSharp").hide();
      $("#css").show();
      $("#ruby").hide();
      $("#php").show();
      $("#java").show();
    }
    else {
      $("#error").show();
      $("#cSharp").hide();
      $("#css").hide();
      $("#ruby").hide();
      $("#php").hide();
      $("#java").hide();
    }
    event.preventDefault();
  });
});
