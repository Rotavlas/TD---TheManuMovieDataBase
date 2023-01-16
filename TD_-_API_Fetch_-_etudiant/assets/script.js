async function getStarsFromVote(note) {
    let starEmpty = '<ion-icon name="star-outline"></ion-icon>'
    let halfStar = '<ion-icon name="star-half-outline"></ion-icon>'
    let fullStar = '<ion-icon name="star"></ion-icon>'
    let code , countdown 
    countdown = 0 
        if (note == 0) {
            code = 5 * starEmpty
        } else if (note == 0.5) {
            code = halfStar + ( 4 * starEmpty )
            return code
        } else if ( note == 1 ) {
            code = fullStar + ( 4 * starEmpty )
            return code
        } else if ( note == 1.5 ) {
            code = fullStar + halfStar + ( 3 * starEmpty )
            return code
        } else if ( note == 2 ) {
            code = ( 2 * fullStar ) + ( 3 * starEmpty )
            return code
        } else if ( note == 2.5 ) {
            code = ( 2 * fullStar ) + halfStar + ( 2 * starEmpty )
            return code
        } else if ( note == 3 ) {
            code = ( 3 * fullStar ) + ( 2 * starEmpty )
            return code
        } else if ( note = 3.5 ) {
            code = ( 3 * fullStar ) + halfStar + starEmpty
            return code
        } else if ( note = 4 ) {
            code = ( 4 * fullStar ) + starEmpty
            return code
        } else if ( note = 4.5 ) {
            code = ( 4 * fullStar ) + halfStar
            return code
        } else if ( note = 5 ) {
            code = 5 * fullStar
            return code
        }
    }



function getArticle(movie) {
    let article = document.createElement('Article')
    article.className = 'card mb-3 bg-secondary border-0 col-6 col-md-4 col-xl-3 mt-4'
    let description = movie.overview
    article.innerHTML = `
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${movie.poster_path}" class="img-fluid rounded-start" alt="${movie.original_title}">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${movie.original_title}</h5>
                      <p class="card-text">${description}</p>
                      <p class="card-text"><small class="text-muted"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></small></p>
                    </div>
                  </div>
                </div>
    `
    return article
}

fetch('assets/data/movies.json')
    


