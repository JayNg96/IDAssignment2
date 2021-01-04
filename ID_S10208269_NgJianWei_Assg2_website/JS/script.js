const digimonList = document.getElementById('digimonList');
const searchBar = document.getElementById('searchBar');
let digimonCharacters = [];

// addeventlistener to exclude character whose name doesn't match the word typed in the search box from the api.
try {
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredCharacters = digimonCharacters.filter((character) => {
            return (
                character.name.toLowerCase().includes(searchString) ||
                character.level.toLowerCase().includes(searchString)
            );
        });
        displayDigimon(filteredCharacters);
    });
} catch {}


//fetch api
const getDigimon = async () => {
    try {
        const res = await fetch('https://digimon-api.herokuapp.com/api/digimon'); //This await keyword causes the JavaScript runtime to pause my code, not allowing further code to execute in the meantime until the async function call has returned its result
        digimonCharacters = await res.json();
        displayDigimon(digimonCharacters);
    } catch {}
};

//declare a const to get value from API and return it
const displayDigimon = (characters) => {
    const htmlString = characters.map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>Level: ${character.level}</p>
                <img src="${character.img}"></img>
            </li>
        `;
        })
        .join('');
    digimonList.innerHTML = htmlString;
};

// execute the const getDigimon
getDigimon();

// social panel JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible');
});