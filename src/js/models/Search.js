import {api_key, base_url} from '../config';

export default class Search {
    constructor(keyword){
        this.keyword = keyword
    }

    async getResults(){
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&language=en-US&query=${this.keyword}&page=1&include_adult=false`);
        this.data = await response.json();
    }
}