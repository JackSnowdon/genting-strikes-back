// Retrives all ships

function getDetail(apiURL) {
    axios.get(apiURL).then(function(response) {
        showDetail(response.data);
    });
}

// Sorting Ship Details

function showDetail(data) {
    for (i = 0; i < data.results.length; i++) {
        var crew = data.results[i].crew;

        // Only pushes to ships if crew is above 10

        if (crew > 10) {
            ships.push(data.results[i])
        } else {
            // pass
        }
    }

    // Pagination for swapi

    if (data.next) {
        getDetail(data.next);
    } else {
        var slist = document.getElementById("ship-list");

        // Sorts ships by crew 

        ships.sort(function(a, b) {
            return parseFloat(a.crew) - parseFloat(b.crew);
        });

        // Creating and adding to the DOM

        for (x = 0; x < ships.length; x++) {

            // Creates responive elements

            var adddiv = document.createElement("div");
            adddiv.setAttribute("class", "col-md-4 col-12");

            var addcard = document.createElement("div");
            addcard.setAttribute("class", "ship-card");

            // Card header and added to parent element 

            var createname = document.createElement("h3");
            createname.setAttribute("class", "ship-name");
            createname.innerHTML = ships[x].name;
            addcard.appendChild(createname)

            var createmodel = document.createElement("p");
            createmodel.setAttribute("class", "ship-model");
            createmodel.innerHTML = " - " + ships[x].model + "<hr>";
            addcard.appendChild(createmodel)

            // Card List

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
            var shipfilms = ships[x].films

            // Check for most film appearances 

            if (shipfilms.length == "3") {
                createnofilms.setAttribute("class", "ship-film-number-high");
                createnofilms.innerHTML = "Films </br> " + ships[x].films.length + " <i class='far fa-star'></i>";
            } else {
                createnofilms.setAttribute("class", "ship-film-number");
                createnofilms.innerHTML = "Films </br> " + ships[x].films.length;
            }
            createnolist.appendChild(createnofilms)

            adddiv.appendChild(addcard);
            slist.appendChild(adddiv);
        }
    }
}

// Creates array and calls function

var ships = [];
getDetail("https://swapi.co/api/starships");