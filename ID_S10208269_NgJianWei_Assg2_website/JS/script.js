// digidex api JS
try {
    const digimonList = document.getElementById('digimonList');

    const searchBar = document.getElementById('searchBar');
    let digimonCharacters = [];

    // addeventlistener to exclude character whose name doesn't match the word typed in the search box from the api.
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredCharacters = digimonCharacters.filter((character) => {
            return (
                character.name.toLowerCase().includes(searchString)
            );
        });
        displayDigimon(filteredCharacters);
    });

    // fetch api
    const getDigimon = async () => {
        //This await keyword causes the JavaScript runtime to pause my code, not allowing further code to execute in the meantime until the async function call has returned its result
        const res = await fetch('https://digimon-api.herokuapp.com/api/digimon');
        digimonCharacters = await res.json();
        displayDigimon(digimonCharacters);
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
} catch {}

// pokedex api JS
try {
    $(document).ready(function() {
        fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`).then(res => res.json()).then(data => {
            var pic = document.getElementById('pic');
            pic.innerHTML = "<img src='" + data.sprites.front_default + "'style='position:relative;top:-10px;' width=150 height=150/>";
            console.log(data);
            var desc = document.getElementById('desc');
            var abilities = data.abilities;
            var moves = data.moves;
            desc.innerHTML = "<p><b>Type:</b> " + data.types[0].type.name +
                "</p><hr><p id='abty'><b>Abilities: </b></p>";
            for (var i = 0; i < abilities.length; i++) {
                abty.innerHTML += "<span class='badge badge-danger'>" + abilities[i].ability.name + "</span>&nbsp;";
            }
            abty.innerHTML += "<hr><p><b>Moves: </b><button class='badge badge-danger'>~</button><p id='mvs'></p></p>";
            for (var i = 0; i < moves.length; i++) {
                if (i % 2 == 0)
                    mvs.innerHTML += "<span class='badge badge-light'>" + moves[i].move.name + "</span>&nbsp;";
                else if (i % 3 == 0)
                    mvs.innerHTML += "<span class='badge badge-info'>" + moves[i].move.name + "</span>&nbsp;";
                else if (i % 5 == 0)
                    mvs.innerHTML += "<span class='badge badge-danger'>" + moves[i].move.name + "</span>&nbsp;";
                else
                    mvs.innerHTML += "<span class='badge badge-success'>" + moves[i].move.name + "</span>&nbsp;";
            }

            var stats = data.stats;

            /* Chart */
            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'doughnut',

                // The data for our dataset
                data: {
                    labels: ['Speed', 'special-defense', 'special-attack', 'defence', 'attack', 'hp'],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                        borderColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                        data: [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat]
                    }]
                },

                // Configuration options go here
                options: {}
            });
        }).catch(err => console.log(err));
    })
    
    //Add eventlistener to Search button on click, display pokemon data according to what is typed in the box
    var frm = document.querySelector('#frm');
    frm.addEventListener('submit', function(e) {
        e.preventDefault();
        const pkmn = document.querySelector('#pkmn').value.toLowerCase();
        fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`).then(res => res.json()).then(data => {
            var pic = document.getElementById('pic');
            pic.innerHTML = "<img src='" + data.sprites.front_default + "'style='position:relative;top:-10px;' width=150 height=150/>";
            console.log(data);
            var desc = document.getElementById('desc');
            var abilities = data.abilities;
            var moves = data.moves;
            desc.innerHTML = "<p><b>Type:</b> " + data.types[0].type.name +
                "</p><hr><p id='abty'><b>Abilities: </b></p>";
            for (var i = 0; i < abilities.length; i++) {
                abty.innerHTML += "<span class='badge badge-danger'>" + abilities[i].ability.name + "</span>&nbsp;";
            }
            abty.innerHTML += "<hr><p><b>Moves: </b><button class='badge badge-danger'>~</button><p id='mvs'></p></p>";
            for (var i = 0; i < moves.length; i++) {
                if (i % 2 == 0)
                    mvs.innerHTML += "<span class='badge badge-light'>" + moves[i].move.name + "</span>&nbsp;";
                else if (i % 3 == 0)
                    mvs.innerHTML += "<span class='badge badge-info'>" + moves[i].move.name + "</span>&nbsp;";
                else if (i % 5 == 0)
                    mvs.innerHTML += "<span class='badge badge-danger'>" + moves[i].move.name + "</span>&nbsp;";
                else
                    mvs.innerHTML += "<span class='badge badge-success'>" + moves[i].move.name + "</span>&nbsp;";
            }
            var stats = data.stats;

            /* Chart */
            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'doughnut',

                // The data for our dataset to be displayed after search is successful
                data: {
                    labels: ['Speed', 'special-defense', 'special-attack', 'defence', 'attack', 'hp'],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                        borderColor: ['#C39BD3', '#76D7C4', '#F9E79F', '#F5B7B1', '#AED6F1', '#E5E7E9'],
                        data: [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat]
                    }]
                },
            });
        // If no pokemon is found, display a red warning box that says wrong input
        }).catch(err => {
            var desc = document.getElementById('desc');
            desc.innerHTML = "<span class='alert alert-danger'>Wrong Input</span>";
            var canvas = document.getElementById('hd');
            console.log(err)
        });
    })
} catch {}

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