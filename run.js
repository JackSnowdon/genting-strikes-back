const axios = require('axios');

function getDetail(apiURL) {
    axios.get(apiURL).then(function(response) {
        showDetail(response.data);
    });
}

function showDetail(data) {
    for (i = 0; i < data.results.length; i++) {
        names = names + data.results[i].name + "\n";
        // name1.innerText = name1.innerText + "\n" + data.results[i].name;
    }
    if (data.next) {
        getDetail(data.next);
    } else {
        console.log(names); // name1.innerText = names;
    }
}
var names = "";
getDetail("https://swapi.co/api/starships");