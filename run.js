const axios = require('axios');

function getDetail(apiURL) {
    axios.get(apiURL).then(function(response) {
        showDetail(response.data);
    });
}

function showDetail(data) {
    for (i = 0; i < data.results.length; i++) {
        var crew = data.results[i].crew;
        if (crew > 10) {
            ships.push(data.results[i])
        } else {
            // pass
        }
    }
    if (data.next) {
        getDetail(data.next);
    } else {
        console.log(ships); // name1.innerText = names;
    }
}


var ships = [];
getDetail("https://swapi.co/api/starships");