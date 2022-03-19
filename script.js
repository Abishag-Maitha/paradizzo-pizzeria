$(document).ready(function(){
    $(".bt").click(function(){
        $(this).find("p").slideToggle(500).closest(".bt").find("img").slideToggle(700)
      
    });
    // // Hover effects on cards
    // let cards=$(".crd");
    // cards.hover(function(){
    //     $(this).find("p").toggle()
    // })
        
    });