// ==UserScript==
// @name         GCal Toggle All Day
// @namespace    https://rawbytz.wordpress.com
// @version      1.0.7
// @description  Use Ctrl+Enter to toggle a GCal event to/from All Day when the event modal is present.
// @author       rawbytz
// @match        https://calendar.google.com/calendar/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

// https://github.com/rawbytz/gcal-toggle-all-day/raw/master/GCalToggleAllDay.user.js

(function () {
  'use strict';
  // waits for all day checkbox, then toggles and saves
  function checkAllDayAndSave() {
    let interval = setInterval(function () {
      let allDayChk = document.querySelector('#xAlDaCbx > input[type="checkbox"]');
      if (allDayChk) {
        clearInterval(interval); // turn off this timer
        allDayChk.click();
        document.getElementById("xSaveBu").click();
      }
    }, 50);
  }

  function toglAllDay() {
    const editButton = document.querySelector(`button[aria-label="Edit event"]`);
    if (editButton) {
      editButton.click();
      checkAllDayAndSave();
    }
  }

  function activateDuplicate() {
    let interval = setInterval(function () {
      let duplicate = document.querySelector(`li[jsname="lbYRR"]`);
      if (duplicate) {
        clearInterval(interval); // turn off this timer
        duplicate.click();
      }
    }, 50);
  }

  function duplicateAndToggle() {
    const optionsButton = document.querySelector(`button[aria-label="Options"]`);
    if (optionsButton) {
      optionsButton.click();
      activateDuplicate();
      checkAllDayAndSave();
    }
  }

  // Ctrl+Shift+Enter duplicates and all days modal event 
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && !event.altKey && event.shiftKey && !event.metaKey && event.key === "Enter") duplicateAndToggle();
  });


  // Ctrl+Enter toggles all day
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey && event.key === "Enter") toglAllDay();
  });
})();