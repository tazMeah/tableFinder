"use strict";
let change;
$(document).ready(function(){
     
   

    // if user clicks an available table or the cancel button, the form toggles

    // $("div.available, #cancel").click(function(e){     
    //     $("#bottom").toggle()
    //     change = e.target;
    // })

    $(document).on("click", "div.available", function(e){
        $("#bottom").toggle();
        // saves the button that opened the form
         change = e.target; 
    
    })

    $("form").on("click", "#save", function(){
        $("#bottom").toggle();
        $(change).toggleClass("available reserved")
    })

    $("form").on("click", "#cancel", function(){
        $("#bottom").toggle();
    })
   

   // if the user clicks the save button, the form toggles, and the table changes color

//    $("#save").click(function(){
//         $(change).toggleClass("available reserved");
//         $("#bottom").toggle();
//    })





})

