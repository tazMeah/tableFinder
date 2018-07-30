"use strict";

$(document).ready(function(){
     
    // add the class available to each table
    $("#table div").each(function(){
        $(this).addClass("available")
    })

    let change;
    // if user clicks an available table or the cancel button, the form toggles
    $("div.available, #cancel").click(function(e){     
        $("#bottom").toggle()
        change = e.target;
    })

   // if the user clicks the save button, the form toggles, and the table changes color

   $("#save").click(function(){
        $(change).toggleClass("available reserved");
        $("#bottom").toggle();
   })





})

