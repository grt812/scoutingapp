$(function(){
    let seasons = [];

  $("#new-season").on("click", function(){
     $("#season").hide();
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
       $("#screen3-heading").text($(this).text());
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

});
