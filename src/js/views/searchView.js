import { elements } from '../base';

export const clearSearch = () => {
    elements.searchInput.value = '';
}
export const clearResults = () => {
    elements.searchResults.innerHTML = '';
}

export const displayResults = data => {
    data.results.forEach(movie => {
        const html = `
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
        `;

        elements.searchResults.insertAdjacentHTML('beforeend', html);
    })
}