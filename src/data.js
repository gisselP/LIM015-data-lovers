export const showData = (data) => {
    const cardElement = document.createElement('div');
    cardElement.className = "card";

    let description = data.description;
    let shortDescription = description.split(" ", 30).join(" ");

    const templateCard =
        `<div class="card-contenido">
          <div class="card-img">
              <img src="${data.poster}">
              <span class="year-card"> ${data.release_date}</span>
              <span class="score-card"> ${data.rt_score}<i class="fas fa-star"></i></span>
          </div>
          <div class="text-card">
              <h1 class="title-card">${data.title}</h1>
              <p class="text-sumary">${shortDescription}...</p>
              <p class="text-sumary maker">Director: ${data.director}</p>
              <p class="text-sumary maker">Producer: ${data.producer}</p>
          </div>
        </div>`;

    cardElement.innerHTML = templateCard;
    return cardElement;
}

//film es el valor "value" de nuestro objeto allData  gisell=alldata[6]
export const filterByDirector = (director, allData) => {
    let dataFilter = allData.filter(film => film.director == director);
    return dataFilter;
}

export const filterByProducer = (producer, allData) => {
    let dataFilter = allData.filter(film => film.producer == producer);
    return dataFilter;
}

export const filterBySort = (sort, allData) => {
    let dataSort;
    switch (sort) {
        case 'BestRated':
            {
                dataSort = allData.sort((film1, film2) => {
                    return film2.rt_score - film1.rt_score;
                });
                break;
            }
        case 'MostRecent':
            {
                dataSort = allData.sort((film1, film2) => {
                    return film2.release_date - film1.release_date;
                });
                break;
            }
        default:
            {
                dataSort = allData.sort((film1, film2) => {
                    return film1.release_date - film2.release_date;
                });
                break;
            }
    }
    return dataSort;
}