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
        console.log(ships);
        var slist = document.getElementById("ship-list");
        console.log(slist)
        for (x = 0; ships.length; x++) {
            console.log(ships[x].name, ships[x].model, ships[x].crew, ships[x].passengers, ships[x].films, ships[x].films.length);
            var adddiv = document.createElement("div");
            adddiv.setAttribute("class", "col-md-4 col-12");
            var addcard = document.createElement("div");
            addcard.setAttribute("class", "ship-card");
            // var node = document.createTextNode(ships[x].name);
            // addcard.appendChild(node);
            adddiv.appendChild(addcard);
            slist.appendChild(adddiv);
        }
    }
}

var ships = [];
getDetail("https://swapi.co/api/starships");