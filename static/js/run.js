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
        for (x = 0; x < ships.length; x++) {
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
            if (ships[x].films.length == "3") {
                createnofilms.setAttribute("class", "ship-film-number-high");
                createnofilms.innerHTML = "Films </br> " + ships[x].films.length + " <i class='far fa-star'></i>";
            } else {
                createnofilms.setAttribute("class", "ship-film-number");
                createnofilms.innerHTML = "Films </br> " + ships[x].films.length;
            }
            createnolist.appendChild(createnofilms)

            var shipfilms = ships[x].films

            for (j = 0; j < shipfilms.length; j++) {
                console.log(ships[x].name, shipfilms[j])
            }
            adddiv.appendChild(addcard);
            slist.appendChild(adddiv);
        }
    }
}
var ships = [];
getDetail("https://swapi.co/api/starships");