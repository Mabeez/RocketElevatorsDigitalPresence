$(document).ready(function () {
    $("#residential-apartments").hide();
$("#commercial-apartments").hide();
$("#corporate-apartments").hide();
$("#hybrid-apartments").hide();

$("#residential-number-of-apartments").change(function(){
  
  var numberOfApartments = $("#residential-number-of-apartments").val();
  console.log("The text has been changed:", numberOfApartments);
  
  
 $("#residential-number-of-floors").change(function(){
  var numberOfFloors = $("#residential-number-of-floors").val();
  console.log("The text has been changed:", numberOfFloors);

$("#residential-number-of-basements").change(function(){
  var numberOfBasements = $("#residential-number-of-basements").val();
  console.log("The text has been changed:", numberOfBasements);
  
  
  });     

 });  
    
       
});  
    



$('input[name=colorRadio]').click(function () {
    if ($(this).attr("value") == "residential") {
           $("#residential-apartments").show();
        $("#commercial-apartments").hide();
        $("#corporate-apartments").hide();
        $("#hybrid-apartments").hide();
    }
    if ($(this).attr("value") == "commercial") {
          $("#residential-apartments").hide();
        $("#commercial-apartments").show();
        $("#corporate-apartments").hide();
        $("#hybrid-apartments").hide();
    }
    if ($(this).attr("value") == "corporate") {
                        $("#residential-apartments").hide();
        $("#commercial-apartments").hide();
        $("#corporate-apartments").show();
        $("#hybrid-apartments").hide();
    }
    
    if ($(this).attr("value") == "hybrid") {
          $("#residential-appartments").hide();
        $("#commercial-appartments").hide();
        $("#corporate-appartments").hide();
        $("#hybrid-appartments").show();
    }
   }); 
         
});
