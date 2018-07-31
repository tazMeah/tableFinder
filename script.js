"use strict";
let change;
$(document).ready(function(){
     
   

    $(document).on("click", "div.available ", function(e){
        $("#bottom").toggle();
        // saves the button that opened the form
         change = e.target; 
         $("#tableNumber span").text($(change).text())
         
    
    })

    $("form").on("click", "#save", function(){
        $("#bottom").toggle();
        $(change).toggleClass("available reserved")
    })

    $("form").on("click", "#cancel", function(){
        $("#bottom").toggle();
    })
   




})

