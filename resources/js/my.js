$(document).ready(function(){
    
    
    //STICKY MENU
    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }1
                                        
          });
    
    
    
    
    //MIXITUP(portfolio SECTION)
    var mixer = mixitup('.container');
});  
    //back to top
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll",() =>{
        if (window.pageYOffset > 100){
            toTop.classList.add("active");
        }
        else{
            toTop.classList.remove("active");
        }
    })
