// NewsApi Service

import axios from 'axios';
import {LogoApiService} from "../../shared/services/logo-api.service.js";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2'
})

export class NewsApiService {
    apiKey = '628b363642fa4826986e105928cf59fa';
    logoApi = new LogoApiService();

    //methods

    // Esta funcion hace una peticion a la API de NewsAPI para obtener las fuentes de noticias
    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`)
    }

    // Esta funcion hace una peticion a la API de NewsAPI para obtener los articulos de una fuente en particular
    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
    }

    // Esta funcion hace una peticion a la API de Clearbit para obtener el logo de la URL que se le pase
    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}