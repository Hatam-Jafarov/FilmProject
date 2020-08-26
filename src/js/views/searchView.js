import { elements } from '../base';

export const clearSearch = () => {
    elements.searchInput.value = '';
}
export const clearResults = () => {
    elements.searchResults.innerHTML = '';
}

export const displayResults = (keyword,data) => {
    data.results.forEach(movie => {
        const html = `
            <a href="#${movie.id}" class="text-decoration-none">
                <li class="media my-4">
                    <img src="https://image.tmdb.org/t/p/w154/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/154x231';" class="mr-3"
                        title="${movie.title}">
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">
                            <span class="badge badge-primary">${movie.vote_average}</span>
                            ${movie.title}
                        </h5>
                        ${movie.overview}
                    </div>
                </li>
            </a>
        `;

        elements.movieListHeader.innerHTML =  `<span class='text-success'>${keyword}</span> axtarış sözü üçün <span class='text-success'>${data.total_results}</span> nəticə tapıldı`;

        elements.movieListContainer.classList.add('d-block');

        elements.searchResults.insertAdjacentHTML('beforeend', html);
    })
}