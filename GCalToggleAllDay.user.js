// ==UserScript==
// @name         GCal Toggle All Day
// @namespace    https://rawbytz.wordpress.com
// @version      1.0.5
// @description  Use Ctrl+Enter to toggle a GCal event to/from All Day when the event modal is present.
// @author       rawbytz
// @match        https://calendar.google.com/calendar/*
// @updateUrl    https://github.com/rawbytz/gcal-toggle-all-day/raw/master/GCalToggleAllDay.user.js
// @downloadUrl  https://github.com/rawbytz/gcal-toggle-all-day/raw/master/GCalToggleAllDay.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';
  function checkAllAndSave() {
    let interval = setInterval(function () {
      let saveButton = document.getElementById("xSaveBu");
      if (saveButton) {
        clearInterval(interval); // turn off this timer
        document.querySelector('#xAlDaCbx > input[type="checkbox"]').click();
        saveButton.click(); 
      }
    }, 50);
  }

  function toglAllDay() {
    const editButton = document.querySelector(`button[aria-label="Edit event"]`);
    if (editButton) {
      editButton.click();
      checkAllAndSave();
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && event.key === "Enter") toglAllDay(); // Ctrl+Enter
  });
})();

