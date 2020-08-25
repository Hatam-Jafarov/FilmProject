import {api_key, base_url} from '../config';

export class Movie {
    constructor(id){
        this.id = id;
    }

    async GetMovie(){
        const response = await fetch(`${base_url}/movie/${this.id}?api_key=${api_key}&language=en-US&query=${this.keyword}&page=1&include_adult=false`);
        this.data = await response.json();
    }
}