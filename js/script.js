'use strict';
/* state variables */
let searchInput = null;
let searchBtn = null;

let maleUsers = null;
let femaleUsers = null;
let ageSum = null;
let ageAvg = null;

let allUsers = [];
let searchedUser = [];

let totalMaleUsers = 0;
let totalFemaleUsers = 0;
let totalAgeSum = 0;
let totalAgeAvg = 0;

window.addEventListener('load', () => {
  searchInput = document.querySelector('#search-input');
  //searchInput.addEventListener('keyup', doSearch);
  searchInput.focus();

  searchBtn = document.querySelector('#search-btn');
  searchBtn.addEventListener('click', doSearch);

  maleUsers = document.querySelector('#male-users');
  femaleUsers = document.querySelector('#female-users');
  ageSum = document.querySelector('#age-sum');
  ageAvg = document.querySelector('#age-avg');

  maleUsers.textContent = totalMaleUsers;
  femaleUsers.textContent = totalFemaleUsers;
  ageSum.textContent = totalAgeSum;
  ageAvg.textContent = totalAgeAvg;
});

function doSearch() {
  console.log('Searching...');
}
