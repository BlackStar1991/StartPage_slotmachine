window.onload = function() {

    var blackWrapper = $(".blackWrapper"),
        body = $("body"),
        active = "active",
        $window = $(window);

    ///  sliderEffect
    function sliderEffectForButtons(button, element, duration) {
        button.click(function () {
            element.slideToggle(duration);
        });
    }

    //  hideShowEffect
    function hideShowEffect(button, element) {
        button.click(function () {
            element.toggleClass("hidden");
        });
    }

    /// scrollButton
    function slideSubMenu(btn, fieldUnderBtn, displayView){
        btn.each(function(){
            $(this).on({
                click: function (){
                    if ($window.width() <= displayView) {
                        fieldUnderBtn.slideToggle(400);
                    }
                }
            });
        });
    }


  ////// LikeLinks buttons
    function likeLink(btn) {
        btn.on("click", function(){
            var urlLink = $(this).attr("data-href");
            if ( urlLink === "" ){
                alert("URL address isn't correct / шляпа" );
            }else{
                window.open(urlLink);
            }
        })
    }

   



// Ancor to top
    /*
        $(".bl_ancor").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
        $(window).scroll(function () {



            var ancor = $(".bl_ancor"),
                windowHeight = $(window).height() / 2;

            if ($(this).scrollTop() > windowHeight) {

                ancor.removeClass("hidden");

            } else {
                ancor.addClass("hidden");
            }


            if ( ($(this).scrollTop() >= topMainHeaderBlock) && (screenWidth >= 1027)) {
                mainHeaderBlock.addClass(mainHeaderFixed);
                mainNavigation.addClass(mainNavigationFixed);
            } else {
                mainHeaderBlock.removeClass(mainHeaderFixed);
                mainNavigation.removeClass(mainNavigationFixed);
            }


        });
     */


// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});

    /*
        ////////////////// POPUPS LOGIC

            function popupWindowShow(btn, field) {
                btn.on("click", function () {

                    field.removeClass("hidden");
                    blackWrapper.removeClass("hidden");
                    blackWrapper.animate({opacity: 0.6}, 300);
                });
            }

            function closePopupWindow(btn, field) {
                btn.on("click", function () {
                    field.addClass("hidden");
                    blackWrapper.addClass("hidden");
                    blackWrapper.animate({opacity: 0}, 400);
                })
            }


        /// POPUP BIFORE ADD TO SHOPBAG

            function popupWindowBiforeAddToShopBag() {

                var TESTBUTTON = $(".TEST_BUTTON");

                var popupWindow = $(".popup_likeShopbag"),
                    buttonClose = $(".popup_likeShopbag__close"),
                    buttonContinueBuying = $(".popup_likeShopbag__continueBuying");

                popupWindowShow(TESTBUTTON, popupWindow);

                closePopupWindow(buttonClose, popupWindow);
                closePopupWindow(buttonContinueBuying, popupWindow);
                closePopupWindow(blackWrapper, popupWindow);

            }

            popupWindowBiforeAddToShopBag();

        ////////// CallBack PopUp

            function popupWindowCallBack() {
                var buttonCallback = $(".btn_callBack"),
                    fieldCallBack = $(".bl_callback"),
                    buttonClose = $(".bl_callback__close");

                popupWindowShow(buttonCallback, fieldCallBack);
                closePopupWindow(buttonClose, fieldCallBack);
                closePopupWindow(blackWrapper, fieldCallBack);


            }

            popupWindowCallBack();


        //// Succsess PopUp

            function popupWindowSuccsess() {

                var fieldSuccess = $(".bl_success");

                closePopupWindow(blackWrapper, fieldSuccess);
                closePopupWindow( fieldSuccess, fieldSuccess);
            }

            popupWindowSuccsess();

        */


};


