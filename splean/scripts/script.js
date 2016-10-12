"use strict";
$(document).ready(function(){
  
  if(window.innerWidth <= 991){
    $(".cover").appendTo("#first-row");
    }
});
// else
  // pageIsSmall = false;

// var $covers = $(".cover");
// var $smallCovers;
  
// $(window).resize(function(){
  
  // if(window.innerWidth <= 991){
    // if(!pageIsSmall){
      // pageIsSmall = true;
      // // $smallCovers = $covers.clone();
      
      // $(".cover").clone().appendTo("#first-row").addClass("smallCover").removeClass("cover");
      // $(".cover").hide();
      // $("hr:nth-child(n+3)").hide();
      // // $(".well").css("background-color", "red");
      // // console.log(String(pageIsSmall));
    // }
  // } else {
    // if(pageIsSmall){
      // pageIsSmall = false;
      // $(".smallCover").remove();
      // $(".cover").show();
      // $("hr:nth-child(n+3)").show();
      // // $(".well").css("background-color", "green");
      // // console.log(String(pageIsSmall));
    // }
  // }
// });
