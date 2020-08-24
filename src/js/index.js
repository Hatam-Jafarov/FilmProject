//api: 41728cc89ddb95370acfded3f1e2f7ab
//url: https://api.themoviedb.org/3

//request: 
//https://api.themoviedb.org/3/search/movie?api_key=41728cc89ddb95370acfded3f1e2f7ab&language=en-US&query=abc&page=1&include_adult=false



async function getResults(keyword){
    const api_key = "41728cc89ddb95370acfded3f1e2f7ab";
    const base_url = "https://api.themoviedb.org/3";

    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`);
    const data = await response.json();
    console.log(data.results);
}

getResults('abc');