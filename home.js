var darkCheck = localStorage.getItem("darkMode");

if(darkCheck === null){ 
    darkMode = false; 
} else {
    if(darkCheck === "true") darkMode = true;
    else darkMode = false;
}

if(darkMode) { toggleDarkMode(); }

$("#hidebtn").click(function(){ $(".maintenance").hide(); });
$("#back").click(function(){ history.back(); });
$("#topbtn").click(function(){ gotoTop(); });
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

$(".ctnum").css("border-color", $('.accentbg').css("background-color"));

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