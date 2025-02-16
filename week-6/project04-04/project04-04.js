// biome-ignore lint/suspicious/noRedundantUseStrict: for school assignment
'use strict';

/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Sara King
      Date: 02/16/25

      Filename: project04-04.js
*/

// Global variables
const cashBox = document.getElementById('cash');
const billBox = document.getElementById('bill');
const changeBox = document.getElementById('change');

// Event handlers to be run when the cash or bill value changes
cashBox.addEventListener('change', runTheRegister);
billBox.addEventListener('change', runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
  changeBox.value = 0;
  document.getElementById('bill20').innerHTML = 0;
  document.getElementById('bill10').innerHTML = 0;
  document.getElementById('bill5').innerHTML = 0;
  document.getElementById('bill1').innerHTML = 0;
  document.getElementById('coin25').innerHTML = 0;
  document.getElementById('coin10').innerHTML = 0;
  document.getElementById('coin5').innerHTML = 0;
  document.getElementById('coin1').innerHTML = 0;
  document.getElementById('warning').innerHTML = '';
}

// Function to run the cash register
function runTheRegister() {
  zeroTheRegister();

  const changeValue = Number(cashBox.value) - Number(billBox.value);

  try {
    // If the cash is less than the bill, throw an error
    if (changeValue < 0) {
      throw new Error('Cash amount doesn’t cover the bill');
    }

    changeBox.value = formatCurrency(changeValue);
    calcChange(changeValue);
  } catch (error) {
    // Display the error message in the warning section
    document.getElementById('warning').innerHTML = error.message;
  }
}

// Function to calculate the change by each unit of currency
function calcChange(amount) {
  let changeValue = amount;
  // Determine the number of $20 bills
  const bill20Amt = determineCoin(changeValue, 20);
  document.getElementById('bill20').innerHTML = bill20Amt;
  changeValue -= bill20Amt * 20;

  // Determine the number of $10 bills
  const bill10Amt = determineCoin(changeValue, 10);
  document.getElementById('bill10').innerHTML = bill10Amt;
  changeValue -= bill10Amt * 10;

  // Determine the number of $5 bills
  const bill5Amt = determineCoin(changeValue, 5);
  document.getElementById('bill5').innerHTML = bill5Amt;
  changeValue -= bill5Amt * 5;

  // Determine the number of $1 bills
  const bill1Amt = determineCoin(changeValue, 1);
  document.getElementById('bill1').innerHTML = bill1Amt;
  changeValue -= bill1Amt * 1;

  // Determine the number of quarters
  const coin25Amt = determineCoin(changeValue, 0.25);
  document.getElementById('coin25').innerHTML = coin25Amt;
  changeValue -= coin25Amt * 0.25;

  // Determine the number of dimes
  const coin10Amt = determineCoin(changeValue, 0.1);
  document.getElementById('coin10').innerHTML = coin10Amt;
  changeValue -= coin10Amt * 0.1;

  // Determine the number of nickels
  const coin5Amt = determineCoin(changeValue, 0.05);
  document.getElementById('coin5').innerHTML = coin5Amt;
  changeValue -= coin5Amt * 0.05;

  // Determine the number of pennies
  // The Math.round() method rounds the value to the nearest integer
  const coin1Amt = Math.round(changeValue * 100);
  document.getElementById('coin1').innerHTML = coin1Amt;
}

/* ================================================================= */

// Function to determine the largest whole number of currency units that
// can fit within the cash value
function determineCoin(cashValue, currencyUnit) {
  // The parseInt() function returns the integer value of the ratio
  return Math.floor(cashValue / currencyUnit);
}

// Function to display a numeric value as a text string in the format ##.##
function formatCurrency(value) {
  return value.toFixed(2);
}
