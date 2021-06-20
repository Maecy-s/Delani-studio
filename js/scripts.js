
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


