class UI{
    addFilmToUI(newFilm){
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
            <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        `;
    }

    clearAllInputs(titleElement,directorElement,urlElement){
        titleElement.value = "";
        directorElement.value = "";
        urlElement.value = "";
    }
    
    loadAllFilmsFromStorageToUI(films){
        const filmList = document.getElementById("films");
        films.forEach(function(film){
            filmList.innerHTML += `
                <tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>
            `;
        });
    }

    displayMessages(message,type){
        const cardBody = document.querySelector(".card-body");
        // Generate div element for alert after the submit button in form
        let div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.appendChild(document.createTextNode(message));
        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },1000);
    } 

    clearAllFilmsFromUI(){
        const filmList = document.getElementById("films");
        Array.from(filmList.children).forEach(function(element){
            element.remove();
        });
    }
}