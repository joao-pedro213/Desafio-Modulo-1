'use strict';
let searchInput = null;
let searchBtn = null;

let allUsers = [];
let allSearchedUsers = [];

let isBtnActive = false;

let totalMaleUsers = 0;
let totalFemaleUsers = 0;
let totalAgeSum = 0;
let totalAgeAvg = 0;

window.addEventListener('load', () => {
  searchInput = document.querySelector('#search-input');
  searchInput.addEventListener('keyup', doSearchInput);
  searchInput.focus();

  searchBtn = document.querySelector('#search-btn');
  searchBtn.addEventListener('click', doSearchBtn);

  loadData();
});

async function loadData() {
  try {
    const res = await fetch(
      'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
    );
    const json = await res.json();
    createUsersList(json);
  } catch (err) {
    console.log('Erro na requisição: ' + err);
  }
}

function doSearchInput(event) {
  handleSearchBtn();

  if (event.key === 'Enter' && isBtnActive) {
    doSearch();
    render();
  } else return;
}

function doSearchBtn() {
  doSearch();
  render();
}

function doSearch() {
  allSearchedUsers = allUsers.filter((user) => {
    return user.name.toLowerCase().includes(searchInput.value);
  });

  return nameToSearch;
}

function handleSearchBtn() {
  if (searchInput.value.length > 0) {
    searchBtn.removeAttribute('disabled');
    isBtnActive = true;
  } else {
    searchBtn.setAttribute('disabled', true);
    isBtnActive = false;
    allSearchedUsers = [];
    render();
  }
}

function createUsersList(data) {
  allUsers = data.results.map((user) => {
    const { name, picture, dob, gender } = user;

    return {
      name: `${name.first} ${name.last}`,
      picture: picture.thumbnail,
      age: dob.age,
      gender,
    };
  });
}

function render() {
  renderUsersList();
  renderStatistics();
}

function renderUsersList() {
  const usersList = document.querySelector('#users-list');
  usersList.innerHTML = '';

  allSearchedUsers.forEach((user) => {
    let newUser = ` <li class='user'>
                      <img class='user-picture' src='${user.picture}'/>
                      <p class='user-info'>${user.name}, ${user.age} anos</p>
                    </li>
                  `;
    usersList.innerHTML += newUser;
  });

  if (allSearchedUsers.length === 0) {
    usersList.textContent = 'Nenhum usuário encontrado.';
  }
}

function renderStatistics() {
  const statistics = document.querySelector('.statistics');
  statistics.innerHTML = '';

  if (allSearchedUsers.length === 0) {
    statistics.textContent = 'Sem dados para calcular as estatísticas.';
    return;
  }

  totalMaleUsers = countTotalMaleUSers(allSearchedUsers);
  totalFemaleUsers = countTotalFemaleUSers(allSearchedUsers);
  totalAgeSum = sumUsersAge(allSearchedUsers);
  totalAgeAvg = doAvg(totalAgeSum, allSearchedUsers.length);

  const statisticsInfo = `<div class="statistics-field">
                            <label class="field-title">Sexo masculino: </label>
                            <span class="field-result" id="male-users">${totalMaleUsers}</span>
                          </div>

                          <div class="statistics-field">
                            <label class="field-title">Sexo feminino: </label>
                            <span class="field-result" id="female-users">${totalFemaleUsers}</span>
                          </div>

                          <div class="statistics-field">
                            <label class="field-title">Soma das idades: </label>
                            <span class="field-result" id="age-sum">${totalAgeSum}</span>
                          </div>

                          <div class="statistics-field">
                            <label class="field-title">Média das idades: </label>
                            <span class="field-result" id="age-avg">${totalAgeAvg}</span>
                          </div>`;

  statistics.innerHTML = statisticsInfo;
}

function countTotalMaleUSers(usersList) {
  let totalMale = usersList.filter((user) => user.gender === 'male');
  return totalMale.length;
}

function countTotalFemaleUSers(usersList) {
  let totalFemale = usersList.filter((user) => user.gender === 'female');
  return totalFemale.length;
}

function sumUsersAge(usersList) {
  let totalAge = usersList.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0);

  return totalAge;
}

function doAvg(totalElementsSum, totalElements) {
  return (totalElementsSum / totalElements).toFixed(2);
}
