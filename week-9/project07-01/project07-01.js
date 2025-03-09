// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Sara King
      Date: March 9, 2025

      Filename: project07-01.js
*/


const signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const pwd = document.getElementById("pwd").value;
   const feedback = document.getElementById("feedback");

   const regexChar = /[A-Z]/;
   const regexDigit = /\d/;
   const regexSymbol = /[!$#%]/;

   if (pwd.length < 8) {
       feedback.textContent = "Your password must be at least 8 characters.";
   } else if (!regexChar.test(pwd)) {
       feedback.textContent = "Your password must include an uppercase letter.";
   } else if (!regexDigit.test(pwd)) {
       feedback.textContent = "Your password must include a number.";
   } else if (!regexSymbol.test(pwd)) {
       feedback.textContent = "Your password must include one of the following: !$#%.";
   } else {
       signupForm.submit();
   }
});
