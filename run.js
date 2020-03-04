var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var req = new XMLHttpRequest();
var URLhost = 'https://swapi.co/api/starships/'


function loadShips() {
    req.open('GET', URLhost, true);
    req.addEventListener('load', function() {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            console.log(response);
        } else {
            console.log('Error in network request: ' + req.statusText);
        }
    });
    req.send(null);
}

loadShips();