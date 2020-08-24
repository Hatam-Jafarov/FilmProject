//api: 41728cc89ddb95370acfded3f1e2f7ab
//url: https://api.themoviedb.org/3

//request: 
//https://api.themoviedb.org/3/search/movie?api_key=41728cc89ddb95370acfded3f1e2f7ab&language=en-US&query=abc&page=1&include_adult=false



import Search from './models/Search';
const search = new Search('abc');

console.log(search);
search.getResults();