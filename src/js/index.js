//api: 41728cc89ddb95370acfded3f1e2f7ab
//url: https://api.themoviedb.org/3

//request: 
//https://api.themoviedb.org/3/search/movie?api_key=41728cc89ddb95370acfded3f1e2f7ab&language=en-US&query=abc&page=1&include_adult=false

import Search from './models/Search';
import {elements} from './base';
import * as searchView from './views/searchView';
import { Movie } from './models/Movie';

const state = {};

// Search Controller

const searchController = async () => {
    const keyword = elements.searchInput.value;
    console.log(keyword)
    if(keyword){
        state.search = new Search(keyword);

        await state.search.getResults();
        searchView.clearSearch();
        searchView.clearResults();
        searchView.displayResults(state.search.data)
    }
    else{
        alert('enter keyword')
    }
}

elements.searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    searchController();
    console.log('form-submitted');
    console.log(elements)
})

// Movie Controller

const movieController = async () => {
    const id = window.location.hash.replace('#','');
    if(id){
        state.movie = new Movie(id);
        await state.movie.getMovie();

        console.log(state.movie)
    }
    
};
window.addEventListener('hashchange',movieController)