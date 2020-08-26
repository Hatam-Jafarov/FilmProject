//api: 41728cc89ddb95370acfded3f1e2f7ab
//url: https://api.themoviedb.org/3

//request: 
//https://api.themoviedb.org/3/search/movie?api_key=41728cc89ddb95370acfded3f1e2f7ab&language=en-US&query=abc&page=1&include_adult=false

import Search from './models/Search';
import {elements,renderLoader,clearLoader} from './base';
import * as searchView from './views/searchView';
import * as movieView from './views/movieView';
import { Movie } from './models/Movie';

const state = {};

// Search Controller

const searchController = async () => {
    const keyword = elements.searchInput.value;
    if(keyword){
        state.search = new Search(keyword);

        searchView.clearSearch();
        searchView.clearResults();

        renderLoader(elements.movieListContainer)

        await state.search.getResults();
        searchView.displayResults(keyword,state.search.data);

        Promise.all([state.search.getResults()]).then(values => {
            clearLoader(elements.movieListContainer)
        })
        
    }
    else{
        alert('enter keyword')
    }
}

elements.searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    searchController();
})

// Movie Controller

const movieController = async () => {
    const id = window.location.hash.replace('#','');
    if(id){
        state.movie = new Movie(id);
        await state.movie.getMovie();

        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }
    
};
window.addEventListener('hashchange',movieController);

elements.movieDetailsClose.addEventListener('click',movieView.closeDetails)