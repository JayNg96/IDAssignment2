const digimonList = document.getElementById('digimonList');

const getDigimon = async () => {
    try { 
        const res = await fetch('https://digimon-api.herokuapp.com/api/digimon'); //This await keyword causes the JavaScript runtime to pause my code, not allowing further code to execute in the meantime until the async function call has returned its result
        digimonCharacters = await res.json();
        console.log(digimonCharacters); //Console log to see what data i will get
    } catch (err) { //Catch error
        console.error(err);
    }
};