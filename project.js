const form = document.getElementById("film-form");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-films");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

const ui = new UI(); // Generating UI instance
const storage = new Storage(); // Generating Storage instance

eventListeners(); // load all of events

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilmsFromStorageToUI(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clearFilms.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (titleElement.value === "" || directorElement.value === "" || urlElement.value === "")
        ui.displayMessages("Please fill the inputs","danger");
    else{
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); // add film to UI
        storage.addFilmToStorage(newFilm); // add film to Local Storage
        ui.displayMessages("A new film has been created successfully","success");
    }
    ui.clearAllInputs(titleElement,directorElement,urlElement); // clear all inputs after add film
    e.preventDefault();
}

function deleteFilm(e){
    if (e.target.className === "btn btn-danger") {
        filmTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        e.target.parentElement.parentElement.remove(); // delete film element from UI
        storage.deleteFilmFromStorage(filmTitle);
        ui.displayMessages("The film has been deleted successfully","success");
    }
    e.preventDefault();
}

function clearAllFilms(e){
    if (confirm("Do you want to delete all films?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();   
    }
    e.preventDefault();
}