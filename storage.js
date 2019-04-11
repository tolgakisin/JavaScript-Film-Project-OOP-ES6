class Storage{
    addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    }

    getFilmsFromStorage(){
        let films;

        if (localStorage.getItem("films") === null) 
            films=[];
        else
            films = JSON.parse(localStorage.getItem("films"));

        return films;
    }

    deleteFilmFromStorage(filmTitle){
        let films = this.getFilmsFromStorage();

        films.forEach(function(film,index){
            if (filmTitle === film.title) {
                films.splice(index,1); // remove value from array in local storage
            }
        });

        localStorage.setItem("films",JSON.stringify(films));
    }

    clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }
}