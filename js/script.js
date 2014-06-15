$.fn.cycle.defaults.autoSelector = '.slides';

window.onload=function (){

    var popupOpen    = $(".popup-toggle"),
        popupOverlay = $(".popup-overlay");
        popup        = $(".popup");
 
    popupOpen.on("click", function (e) {
        e.preventDefault();
 		
 		popupOverlay.css("display","block").addClass("fadeIn");
        popup.addClass("fadeInDown");
        setTimeout(function () {
				popupOverlay.removeClass("fadeOut").css("opacity","1");
        		popup.removeClass("fadeOut").css("opacity","1");
            }, 1000);
    });
 
    popupOverlay.on("click", function (e) {
        if (e.currentTarget === e.target) {
            popup.addClass("fadeOut");
            popupOverlay.addClass("fadeOut");
            setTimeout(function () {
				popup.removeClass("fadeInDown").css("opacity","0").removeClass("fadeOut");
				popupOverlay.removeClass("fadeIn").removeClass("fadeOut").css("opacity","0").css("display","none");
            }, 1000);
        }
    });
 
};