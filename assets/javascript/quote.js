           // QUOTE PAGE //
           
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

            $("#commercial-number-of-floors").change(function(){
                var commercialNumberOfFloors = $("#commercial-number-of-floors").val();
                console.log("The text has been changed:", commercialNumberOfFloors);
                
            $("#commercial-number-of-basements").change(function(){
                var commercialNumberOfBasements = $("#commercial-number-of-basements").val();
                console.log("The text has been changed:", commercialNumberOfBasements); 
                
            $("#commercial-number-of-companies").change(function(){
                var commercialNumberOfCompanies = $("#commercial-number-of-companies").val();
                console.log("The text has been changed:", commercialNumberOfCompanies);
                
            $("#number-of-parking-spots").change(function(){
                var numberOfParkingSpots = $("#number-of-parking-spots").val();
                console.log("The text has been changed:", numberOfParkingSpots);
                
            $("#number-of-elevators").change(function(){
                var numberOfElevators = $("#number-of-elevators").val();
                console.log("The text has been changed:", numberOfElevators);
                
                
                
                });
                });
                });
                });
                });
                
            $("#corporate-number-of-floors").change(function(){
                var corporateNumberOfFloors = $("#corporate-number-of-floors").val();
                console.log("The text has been changed:", corporateNumberOfFloors);   
                
            $("#corporate-number-of-basements").change(function(){
                var corporateNumberOfBasements = $("#corporate-number-of-basements").val();
                console.log("The text has been changed:", corporateNumberOfBasements);
                
            $("#corporate-number-of-parking-spots").change(function(){
                var corporateNumberOfParkingSpots = $("#corporate-number-of-parking-spots").val();
                console.log("The text has been changed:", corporateNumberOfParkingSpots);
                
            $("#number-of-corporations").change(function(){
                var numberOfCorporations = $("#number-of-corporations").val();
                console.log("The text has been changed:", numberOfCorporations);
                
            $("#maximum-occupancy").change(function(){
                var maximumOccupancy = $("#maximum-occupancy").val();
                console.log("The text has been changed:", maximumOccupancy);    
                
            
            });
            });
            });
                });
            });

            $("#hybrid-number-of-floors").change(function(){
                var hybridNumberOfFloors = $("#hybrid-number-of-floors").val();
                console.log("The text has been changed:", hybridNumberOfFloors);
                
            $("#hybrid-number-of-basements").change(function(){
                var hybridNumberOfBasements = $("#hybrid-number-of-basements").val();
                console.log("The text has been changed:", hybridNumberOfBasements); 
                
            $("#hybrid-number-of-companies").change(function(){
                var hybridNumberOfCompanies = $("#hybrid-number-of-companies").val();
                console.log("The text has been changed:", hybridNumberOfCompanies);
                
            $("#hybrid-number-of-parking-spots").change(function(){
                var hybridNumberOfParkingSpots = $("#hybrid-number-of-parking-spots").val();
                console.log("The text has been changed:", hybridNumberOfParkingSpots);
                
            $("#hybrid-maximum-occupancy").change(function(){
                var hybridMaximumOccupancy = $("#hybrid-maximum-occupancy").val();
                console.log("The text has been changed:", hybridMaximumOccupancy);
                
                
                });
                });
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
                    $("#hybrid-apartments").show();
                }
            }); 
                    
            });
            function findTotal(){
                var arr = document.getElementsByClassName('amount');
                var tot=0;
                for(var i=0;i<arr.length;i++){
                    if(parseFloat(arr[i].value))
                        tot += parseFloat(arr[i].value);
                }
                document.getElementById('totalordercost').value = tot;
            }