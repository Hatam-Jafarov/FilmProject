export default class Search {
    constructor(keyword){
        this.keyword = keyword
    }

    async getResults(){
        const api_key = "41728cc89ddb95370acfded3f1e2f7ab";
        const base_url = "https://api.themoviedb.org/3";
    
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&language=en-US&query=${this.keyword}&page=1&include_adult=false`);
        this.data = await response.json();
    }
}