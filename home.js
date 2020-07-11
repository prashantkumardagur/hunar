var darkCheck = localStorage.getItem("darkMode");

if(darkCheck === null){ 
    darkMode = false; 
} else {
    if(darkCheck === "true") darkMode = true;
    else darkMode = false;
}

if(darkMode) { toggleDarkMode(); }

/*--------------------------------------------------*/

$("#hidebtn").click(function(){ $(".maintenance").hide(); });
$("#back").click(function(){ history.back(); });
$("#topbtn").click(function(){ gotoTop(); });
$("#themebtn").click(function(){ $("#accentSection").toggle(); });
$("#closeAccentSection").click(function(){ $("#accentSection").hide(); });


/*-----------------------------------------------*/

$("#darkbtn").click(function(){ 
    darkMode = !darkMode;
    toggleDarkMode();
});

function toggleDarkMode(){
    localStorage.setItem("darkMode", darkMode);
    $(".theme").toggleClass("dark");
    if(darkMode) $("body").css("background-color", "#111");
    else $("body").css("background-color", "#f5f5f5");
}

/*-------------------------------------------------*/

var controls = document.getElementById("controls");

window.onscroll = function(){ scrollfunc(); }
function scrollfunc(){
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        controls.style.bottom = "10px";
      } else {
        controls.style.bottom = "-70px";
      }
}
function gotoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*---------------------------------------------------*/

var accentColor = localStorage.getItem("accentColor");
if(accentColor === null){ accentColor = "#37bcff"; }
$('.accentbg').css("background-color", accentColor);
$(".ctnum").css("border-color", accentColor);

$("#pallete span").click(function(){
    var accentColor = $(this).css("background-color"); 
    localStorage.setItem("accentColor", accentColor)
    $('.accentbg').css("background-color", accentColor);
    $(".ctnum").css("border-color", accentColor);
});

function customColorSelect(){
    var customColor = document.getElementById("customColor");
    $('.accentbg').css("background-color", customColor.value);
    $(".ctnum").css("border-color", customColor.value);
}