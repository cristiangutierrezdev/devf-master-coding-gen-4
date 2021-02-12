const input = document.querySelector('#search-app__search-input');
const button = document.querySelector('#search-app__button');
const championName = document.querySelector('#search-app__champion-name');
const championDescription = document.querySelector(
  '#search-app__champion-description',
);

const URL =
  'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json';

function getChampion(name) {
  fetch(URL)
    .then((result) => {
      return result.json();
    })
    .then((data)=>{
      renderChampionData(data.data, name)
    })
    .catch((err) => {
      console.log(err);
    });
}

function search(fun) {
  const text = input.value;

  fun(text);
}

function renderChampionData(championList, name) {
  const champion = championList[name]

  console.log(name)

  championName.textContent = champion.name
  championDescription.textContent = champion.blurb
}

button.addEventListener('click', function () {
  search(getChampion);
});
