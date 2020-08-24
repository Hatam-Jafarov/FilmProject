//api: 41728cc89ddb95370acfded3f1e2f7ab
//url: https://api.themoviedb.org/3

//request: 
//https://api.themoviedb.org/3/search/movie?api_key=41728cc89ddb95370acfded3f1e2f7ab&language=en-US&query=abc&page=1&include_adult=false

import Search from './models/Search';

const state = {};

const searchController = async () => {
    const keyword = document.getElementById('txt-keyword').value;
    if(keyword){
        state.search = new Search(keyword);

        await state.search.getResults();
        console.log(state.search.data)
    }
    else{
        alert('enter keyword')
    }
}


document.getElementById('form-search').addEventListener('submit',function(e){
    e.preventDefault();
    searchController();
    console.log('form-submitted');
})