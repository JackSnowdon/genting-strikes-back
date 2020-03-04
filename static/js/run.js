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

            var createname = document.createElement("h3");
            createname.setAttribute("class", "ship-name");
            createname.innerHTML = ships[x].name;
            addcard.appendChild(createname)

            var createmodel = document.createElement("p");
            createmodel.setAttribute("class", "ship-model");
            createmodel.innerHTML = " - " + ships[x].model + "<hr>";
            addcard.appendChild(createmodel)

            var createnolist = document.createElement("ul");
            createnolist.setAttribute("class", "number-list");
            addcard.appendChild(createnolist)

            var createcrew = document.createElement("li");
            createcrew.setAttribute("class", "ship-crew");
            createcrew.innerHTML = "Crew </br>" + ships[x].crew;
            createnolist.appendChild(createcrew)

            var createpassengers = document.createElement("li");
            createpassengers.setAttribute("class", "ship-passengers");
            createpassengers.innerHTML = "Passengers </br>" + ships[x].passengers;
            createnolist.appendChild(createpassengers)

            var createnofilms = document.createElement("li");
            createnofilms.setAttribute("class", "ship-film-number");
            createnofilms.innerHTML = "Films </br> " + ships[x].films.length;
            createnolist.appendChild(createnofilms)

            adddiv.appendChild(addcard);
            slist.appendChild(adddiv);
        }
    }
}

var ships = [];
getDetail("https://swapi.co/api/starships");