
// function myFunction() {
//     var x = document.getElementById("des");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     }
//     else {
//         x.style.display = "none"
//     }
// }


// $(document).ready(function(){
//     $("button").click(function(){
//         $("div.des").toggle();
//     });
// });

// function meFunction() {
//     var y = document.getElementById("deve");
//     if (y.style.display === "none") {
//         y.style.display = "block";
//     }
//     else {
//         y.style.display = "none"
//     }
// }


// $(document).ready(function(){
//     $("button").click(function(){
//         $("div.deve").toggle();
//     });
// });


// function minFunction() {
//     var z = document.getElementById("pro");
//     if (z.style.display === "none") {
//         z.style.display = "block";
//     }
//     else {
//         z.style.display = "none"
//     }
// }


// $(document).ready(function(){
//     $("button").click(function(){
//         $("div.pro").toggle();
//     });
// });



$(document).ready(function(){
    $(".main").click(function(){
        $(this).children("#paragraph").slideToggle(1000);
        $(this).children("#design").toggle();
    });
    $(".project").mouseover(function(){
        $(this).children(".port").show();
        
    })
     .mouseout(function(){
        $(this).children(".port").hide();
    })
    $("#submitForm").click(function(){
        var naMe = document.getElementById("name").value;
        alert("Hi " + naMe + " " + "we have received your message. Thank you for reaching out to us.");
    });
});


