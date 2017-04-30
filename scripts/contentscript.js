"use strict";
window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);
var typed_keys = {};

function keysPressed(e) {
    const isCtrl = e.keyCode == 17;
    if (isCtrl) {
        typed_keys = {};
    }
    typed_keys[e.keyCode] = true;
    const isCtrlAndK = typed_keys[17] && typed_keys[75] && Object.keys(typed_keys).length == 2;

    if (isCtrlAndK) {
        typed_keys = {};
        e.preventDefault();
        window.location = "about:home";
    }
}

function keysReleased(e) {
    typed_keys = {};
}
