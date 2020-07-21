'use strict';
/* state variables */
let searchInput = null;
let searchBtn = null;

let maleUsers = null;
let femaleUsers = null;
let ageSum = null;
let ageAvg = null;

let allUsers = [];
let allSearchedUsers = [];

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

  loadData();
});

async function loadData() {
  try {
    const res = await fetch(
      'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
    );
    const json = await res.json();
    createUserList(json);
  } catch (err) {
    console.log('Erro na requisição: ' + err);
  }
}

function doSearch() {
  console.log('searching...');

  render();
}

function createUserList(data) {
  allUsers = data.results.map((user) => {
    const { name, lastName, picture, dob, gender } = user;

    return {
      name: name.first,
      lastName: name.last,
      picture: picture.thumbnail,
      age: dob.age,
      gender,
    };
  });
}

function render() {}
