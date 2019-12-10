// ==UserScript==
// @name         GCal Toggle All Day
// @namespace    https://rawbytz.wordpress.com
// @version      0.9
// @description  Toggles GCal event to/from All Day using Ctrl+Enter when event modal is present.
// @author       rawbytz
// @match        https://calendar.google.com/calendar/*
// @updateUrl    https://gist.github.com/rawbytz/ac2f86a8a53533ffad66915b109573fb/raw/GCalToggleAllDay.user.js
// @downloadUrl  https://gist.github.com/rawbytz/ac2f86a8a53533ffad66915b109573fb/raw/GCalToggleAllDay.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';
  function toglAllDay() {
    const editButton = document.querySelectorAll(`div[data-tooltip="Edit event"]`)[0];
    if (editButton) {
      editButton.click();
      setTimeout(function () {
        document.getElementById("xAlDaCbx").click();
        document.getElementById("xSaveBu").click();
      }, 800);
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && event.key === "Enter") toglAllDay(); // Ctrl+Enter
  });
})();