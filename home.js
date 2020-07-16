var darkCheck = localStorage.getItem("darkMode");

if(darkCheck === null){ 
    darkMode = false; 
} else {
    if(darkCheck === "true") darkMode = true;
    else darkMode = false;
}

if(darkMode) { toggleDarkMode(); }

/*--------------------------------------------------*/

var contactPanel = false;
$("#contactbtn").click(function(){
    if(contactPanel) $("#contactSection").css("bottom","-100vh");
    else $("#contactSection").css("bottom","30px");
    contactPanel=!contactPanel;
});

$("#hidebtn").click(function(){ $(".maintenance").hide(); });
$("#back").click(function(){ history.back(); });
$("#topbtn").click(function(){ gotoTop(); });
$("#themebtn").click(function(){ $("#accentSection").toggle(500); });
$("#closeAccentSection").click(function(){ $("#accentSection").hide(500); });
$("#closeContactSection").click(function(){ $("#contactSection").css("bottom","-100vh"); contactPanel=!contactPanel });
$(".faqbody").click(function(){ $(this).children('p').toggle(200); });

var vh = document.querySelector('header').offsetHeight;
document.documentElement.scrollLeft=0;


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

window.onscroll = function(){ scrollfunc(); navFunc(); toggleNav()}

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

function navFunc(){
    if (document.body.scrollTop > vh || document.documentElement.scrollTop > vh){
        $("#navBar").addClass('coloredNav');
    } else {
        $("#navBar").removeClass('coloredNav');
    }
}

var prevScrollpos = window.pageYOffset;
function toggleNav() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

/*---------------------------------------------------*/

var accentColor = localStorage.getItem("accentColor");
if(accentColor === null){ accentColor = "#37bcff"; }
$('.accentbg').css("background-color", accentColor);
$(".ctnum").css("border-color", accentColor);
$(".faqhead h5").css("border-color", accentColor);

$("#pallete span").click(function(){
    var accentColor = $(this).css("background-color"); 
    localStorage.setItem("accentColor", accentColor);
    $('.accentbg').css("background-color", accentColor);
    $(".ctnum").css("border-color", accentColor);
    $(".faqhead h5").css("border-color", accentColor);
});

function customColorSelect(){
    var accentColor = document.getElementById("customColor").value;
    localStorage.setItem("accentColor", accentColor);
    $('.accentbg').css("background-color", accentColor);
    $(".ctnum").css("border-color", accentColor);
    $(".faqhead h5").css("border-color", accentColor);
}

/*------------------------------------------------------------*/

function faqSelection(faq){
    $('.faq h5').removeClass('activefaq');
    $('.faq h5').eq(faq).addClass('activefaq');
    $('.faq section').hide(300);
    $('.faq section').eq(faq).show(300);
}