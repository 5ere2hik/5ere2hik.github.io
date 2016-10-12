"use strict";
$(document).ready(function(){
  
  $(".debug-well").hide();
  
  var $covers = $(".cover");
  var $smallCovers;
  var pageIsSmall = (window.innerWidth <= 991)? true : false;
  
  if(pageIsSmall){
    $covers.clone().appendTo("#first-row");
    $covers.hide();
  }
  
  // $(".debug-well").html("innerWidth: " + window.innerWidth + "\n clientWidth: " + document.documentElement.clientWidth);
  
  
  $(window).resize(function(){
    // $(".debug-well").html("innerWidth: " + window.innerWidth + "\n clientWidth: " + document.documentElement.clientWidth);
    
    if(window.innerWidth <= 991){
      if(!pageIsSmall){
        pageIsSmall = true;
        
        $smallCovers = $covers.clone();
        $smallCovers.appendTo("#first-row").addClass(".smallCover").removeClass("cover");
        $covers.hide();
      }
    } else {
      if(pageIsSmall){
        pageIsSmall = false;
        $(".smallCover").remove();
        $(".cover").show();
        
        
      }
    }
    
    
  });
    
  
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
