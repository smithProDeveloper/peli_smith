import axios from 'axios';
import {urlApi} from "../const/url-api.ts";
import type {ResponseServer} from "../models/response-server.ts";
import type {LanguageType} from "../models/types/language-type.ts";
import type {SingleMovieModel} from "../models/single-movie-model.ts";

export async function getSingleMovieQuery(movie_id: string, language: LanguageType): Promise<ResponseServer<SingleMovieModel | null>> {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/peli_smith/single_movie?movie_id=${movie_id}&language=${language}`,
        headers: {
            'Accept': 'application/json',
            // 'authorization': `Bearer ${token}`
        },
    };
    try {
        const response = await axios.request(config);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log('Error getCryptoSecretKeyQuery');
        console.log(error);
        return {
            status: 500,
            message: 'Internal server error',
            data: null
        }
    }
}