// ==UserScript==
// @name         GCal Toggle All Day
// @namespace    https://rawbytz.wordpress.com
// @version      1.0
// @description  Toggles GCal event to/from All Day using Ctrl+Enter when event modal is present.
// @author       rawbytz
// @match        https://calendar.google.com/calendar/*
// @updateUrl    https://github.com/rawbytz/gcal-toggle-all-day/raw/master/GCalToggleAllDay.user.js
// @downloadUrl  https://github.com/rawbytz/gcal-toggle-all-day/raw/master/GCalToggleAllDay.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';
  function toglAllDay() {
    const editButton = document.querySelector(`div[data-tooltip="Edit event"]`);
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