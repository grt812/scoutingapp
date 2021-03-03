$(function(){
    let seasons = [];

  $("#new-season").on("click", function(){
     // $("#season").hide();
     $("#screen2").show();
  });

  $("#new-label").on("click", function(){
    $("#label").append(`<input class="custom-input" type="text">`);
  });
  // $("#submit").on("click",function(){
  //
  // });
  $("#submit").on("click", function(){
      $("#season-list").append(`<div class="season new">${$("#comp-name").val()} </div>`);
     // seasons.push($(this).val());
     $(".new").on("click", function(){
       $("#screen3").show();
       $("#season").hide();
       $(".screen3-heading").text($(this).text());
    }).removeClass("new");

    $("#screen2").hide();
    $("#season").show();
    $("#comp-name").val("");
    $(".custom-input").val("");
    $("#label").empty();
  });
  $("#back").on("click", function(){
    $("#screen3").hide();
    $("#season").show();
  });
  $(".back-screen3").on("click", function(){
    $("#screen3").show();
    $("#screen2-2").hide();
    $("#screen4").hide();
  });
  $("#back").on("click", function(){
    $("#screen3").hide();
    $("#season").show();
    $("#search").val("");
  });

  $("#edit-comp").on("click", function(){
    $("#screen3").hide();
    $("#screen2-2").show();
  });
  $("#add-team").on("click",function(){
    $("#screen3").hide();
    $("#screen4").show();
  });

  $("#submit-screen4").on("click", function(){
      // alert("new team");
      $("#team-list").append(`<div class="team new" style: "color:#FF4136">Team ${$("#team-number-screen-4").val()} </div>`);
     // seasons.push($(this).val());
     $(".team.new").on("click", function(){
       $("#screen5").show();
       $("#screen4").hide();
       $("#screen3").hide()
       $(".screen5-heading").text($(this).text());
    }).removeClass("new");

    $("#screen4").hide();
    $("#screen3").show();
    $(".wins-Losses").val("");
    $("#team-number-screen-4").val("");

    // $("#comp-name").val("");
    // $(".custom-input").val("");
    // $("#label").empty();
  });

  $(".back-screen3").on("click", function(){
    $("#screen5").hide();
    $("#screen6").hide();
    $("#screen3").show();
  });

  $("#add-match").on("click", function(){
    $("#screen3").hide();
    $("#screen6").show();
  });



});
