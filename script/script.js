$(document).ready(function() {


   $(".nav-link").hover(function (){
    $(this).css("text-decoration", "underline");
},function(){
    $(this).css("text-decoration", "none");
}
);


    
    $(".hero-image img").hover(function() {
        $(this).css("opacity", 0.9);
    
    },
    function() {
        $(this).css("opacity", 1.0);
    });

    $(".group-image").hover(function() {
        $(this).css("opacity", 0.8);
    },
    function() {
        $(this).css("opacity", 1.0);
    });



    $(".picture-area img").hover(function() {
        $(this).css("opacity", 0.8);
    },
    function() {
        $(this).css("opacity", 1.0);
    });

 

    $(".font-awesome-icon-about i").hover(function() {
        $(this).css("color", "#527158");
    },
    function() {
        $(this).css("color", "black");
    
    });



    $(".btn-main").off().click(function() {
        alert("Thank you so much for your interest! We will e-mail you more information and an itinerary.");
        $(this).html("Thank You!");
        
    
    });

    $(".button").off().click(function() {
        alert("Thanks for sharing your story. We hope you win!");
        $(this).html("Thank You!");
    });
    


    $(".fa-plug").hover(function() {
        $(this).css("color", "yellow");
    },
        function() {
            $(this).css("color", "");
    });


    $('.fa-facebook-square').hover(function() {
        $(this).addClass('fa-spin');
    }, 
    function() {
        $(this).removeClass('fa-spin');
    });


    $('.fa-twitter').hover(function() {
        $(this).addClass('fa-spin');
    }, 
    function() {
        $(this).removeClass('fa-spin');
    });

    $('.fa-instagram').hover(function() {
        $(this).addClass('fa-spin');
    }, 
    function() {
        $(this).removeClass('fa-spin');
    });

});



