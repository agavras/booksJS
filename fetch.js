let newAuthor = "";
let newCategory = "";

const arrayAuthor = [];
const arrayCategory = [];

const selectAuthor = document.getElementById("selectAuthor");
const selectCategory = document.getElementById("selectCategory");
const affichageBooks = document.getElementById("affichageBooks");

// FUNCTION //////////////////////////////////////////
const setSelect = async function () {
    let response = await fetch('books');
    let data = await response.json();
    for (i = 0; i < data.length; i++) {

        for (j = 0; j < data[i].authors.length; j++) {
            newAuthor = data[i].authors[j];
        }

        for (k = 0; k < data[i].categories.length; k++) {
            newCategory = data[i].categories[k];
        }

        if (!arrayAuthor.includes(newAuthor)) {
            arrayAuthor.push(newAuthor);
        }
        arrayAuthor.sort();

        if (!arrayCategory.includes(newCategory)) {
            arrayCategory.push(newCategory);
        }
        arrayCategory.sort();
    }

    for (i = 0; i < arrayAuthor.length; i++) {
        let opt = document.createElement("option");
        opt.value = arrayAuthor[i];
        opt.innerHTML = arrayAuthor[i];
        selectAuthor.appendChild(opt);
    }

    for (i = 0; i < arrayCategory.length; i++) {
        let opt = document.createElement("option");
        opt.value = arrayCategory[i];
        opt.innerHTML = arrayCategory[i];
        selectCategory.appendChild(opt);
    }

    console.log(data);
    // console.log(data[0].authors[0]);
    // console.log(arrayCategory);
}

const getBooksByAuthor = async function () {
    affichageBooks.innerHTML = "";
    selectCategory.value = "";
    let response = await fetch('books');
    let data = await response.json();

    let urlJaquette = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
    let Author = selectAuthor.options[selectAuthor.selectedIndex].value;
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].authors.length; j++) {
            if (Author == data[i].authors[j]) {
                let card = document.createElement("div");
                card.classList.add("divCard");
                // card.innerHTML = data[i].title;
                affichageBooks.appendChild(card);
                // IMAGE ...............
                imgJaquette = document.createElement("img");
                if (data[i].thumbnailUrl) {
                    urlJaquette = data[i].thumbnailUrl;
                }
                imgJaquette.src = urlJaquette;
                // imgJaquette.style = "width: 128px;";
                card.appendChild(imgJaquette);
                // TITRE ...............
                let cardTitle = document.createElement("h3");
                cardTitle.innerHTML = data[i].title;
                // cardTitle.style = "text-align: center; width: 256px;";
                card.appendChild(cardTitle);
                // ISBN ...............
                let cardIsbn = document.createElement("p");
                cardIsbn.innerHTML = "<strong>ISBN : </strong>" + data[i].isbn;
                // cardIsbn.style = "text-align: center; width: 256px;";
                card.appendChild(cardIsbn);
                // NbrPage ...............
                if (data[i].pageCount) {
                    let cardpageCount = document.createElement("p");

                    let str = data[i].pageCount.toString();
                    // console.log(str);

                    cardpageCount.innerHTML = "<strong>Nbr de pages : </strong>" + str;
                    // cardpageCount.style = "text-align: center; width: 256px;";
                    card.appendChild(cardpageCount);
                }
                // DATE ...............
                if (data[i].publishedDate) {
                    let cardPublishDate = document.createElement("p");

                    let str = data[i].publishedDate.dt_txt.toString();
                    // console.log(str);
                    let Year = str.substring(0, 4);
                    let Month = str.substring(5, 7);
                    let day = str.substring(8, 10);
                    // console.log(Year);
                    // console.log(Month);
                    // console.log(day);

                    let event = new Date(Date.UTC(Year, Month, day, 3, 0, 0));

                    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    let localDate = event.toLocaleDateString('fr-FR', options)

                    cardPublishDate.innerHTML = "<strong>Date de publication : </strong>" + localDate;
                    // cardPublishDate.style = "text-align: center; width: 256px;";
                    card.appendChild(cardPublishDate);
                }
                // SHORT ...............
                if (data[i].shortDescription) {
                    let cardshortDescription = document.createElement("p");

                    let str = data[i].shortDescription.toString();
                    // console.log(str);

                    cardshortDescription.innerHTML = "<strong>Description : </strong>" + str;
                    // cardshortDescription.style = "text-align: center; width: 256px;";
                    card.appendChild(cardshortDescription);
                }
                // ... ...............
            }
        }
    }
}

const getBooksByCategory = async function () {
    affichageBooks.innerHTML = "";
    selectAuthor.value = "";
    let response = await fetch('books');
    let data = await response.json();

    let Category = selectCategory.options[selectCategory.selectedIndex].value;
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].categories.length; j++) {
            if (Category == data[i].categories[j]) {

                let card = document.createElement("div");
                card.classList.add("divCard");
                // card.innerHTML = data[i].title;
                affichageBooks.appendChild(card);
                // IMAGE ...............
                imgJaquette = document.createElement("img");
                if (data[i].thumbnailUrl) {
                    urlJaquette = data[i].thumbnailUrl;
                }
                imgJaquette.src = urlJaquette;
                // imgJaquette.style = "width: 128px;";
                card.appendChild(imgJaquette);
                // TITRE ...............
                let cardTitle = document.createElement("h3");
                cardTitle.innerHTML = data[i].title;
                // cardTitle.style = "text-align: center; width: 256px;";
                card.appendChild(cardTitle);
                // ISBN ...............
                let cardIsbn = document.createElement("p");
                cardIsbn.innerHTML = "<strong>ISBN : </strong>" + data[i].isbn;
                // cardIsbn.style = "text-align: center; width: 256px;";
                card.appendChild(cardIsbn);
                // NbrPage ...............
                if (data[i].pageCount) {
                    let cardpageCount = document.createElement("p");

                    let str = data[i].pageCount.toString();
                    // console.log(str);

                    cardpageCount.innerHTML = "<strong>Nbr de pages : </strong>" + str;
                    // cardpageCount.style = "text-align: center; width: 256px;";
                    card.appendChild(cardpageCount);
                }
                // DATE ...............
                if (data[i].publishedDate) {
                    let cardPublishDate = document.createElement("p");

                    let str = data[i].publishedDate.dt_txt.toString();
                    // console.log(str);
                    let Year = str.substring(0, 4);
                    let Month = str.substring(5, 7);
                    let day = str.substring(8, 10);
                    // console.log(Year);
                    // console.log(Month);
                    // console.log(day);

                    let event = new Date(Date.UTC(Year, Month, day, 3, 0, 0));

                    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    let localDate = event.toLocaleDateString('fr-FR', options)

                    cardPublishDate.innerHTML = "<strong>Date de publication : </strong>" + localDate;
                    // cardPublishDate.style = "text-align: center; width: 256px;";
                    card.appendChild(cardPublishDate);
                }
                // SHORT ...............
                if (data[i].shortDescription) {
                    let cardshortDescription = document.createElement("p");

                    let str = data[i].shortDescription.toString();
                    // console.log(str);

                    cardshortDescription.innerHTML = "<strong>Description : </strong>" + str;
                    // cardshortDescription.style = "text-align: center; width: 256px;";
                    card.appendChild(cardshortDescription);
                }
                // ... ...............
            }
        }
    }
}
// VUE ///////////////////////////////////////////////
setSelect();