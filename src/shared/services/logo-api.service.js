export class LogoApiService {
    baseUrl = 'https://logo.clearbit.com/';

    //Esta funcion hace una peticion a la API de Clearbit para obtener el logo de la URL que se le pase
    getUrlToLogo(source) {
        return `${this.baseUrl}/${new (source.url).host}`; //Averiguar
    }
}

