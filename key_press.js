// ==UserScript==
// @name           Disable Ctrl T interceptions
// @description    Stop websites from highjacking keyboard shortcuts
//
// @run-at         document-start
// @include        *
// @grant          none
// ==/UserScript==

// Keycode for 't'. Add more to disable other ctrl+X interceptions
keycodes = [84];  

(window.opera ? document.body : document).addEventListener('keydown', function(e) {
    // alert(e.keyCode ); //uncomment to find more keyCodes
    if (keycodes.indexOf(e.keyCode) != -1 && e.ctrlKey) {
        e.cancelBubble = true;
        e.stopImmediatePropagation();
    // alert("Gotcha!"); //ucomment to check if it's seeing the combo
    }
    return false;
}, !window.opera);