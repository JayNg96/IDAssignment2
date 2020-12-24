const digimonList = document.getElementById('digimonList');

const getDigimon = async () => {
    try { 
        const res = await fetch('https://digimon-api.herokuapp.com/api/digimon'); //This await keyword causes the JavaScript runtime to pause my code, not allowing further code to execute in the meantime until the async function call has returned its result
        digimonCharacters = await res.json();
        displayDigimon(digimonCharacters);
    } catch (err) { //Catch error
        console.error(err);
    }
};

const displayDigimon = (characters) => {
    const htmlString = characters.map((character) => 
    {
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

getDigimon();