import axios from 'axios';
import {urlApi} from "../const/url-api.ts";
import type {ResponseServer} from "../models/response-server.ts";
import type {UpcomingMoviesResponse} from "../models/peli-smith-model.ts";
import type {LanguageType} from "../models/types/language-type.ts";

export async function getMoviesPopularQuery(page: string, language: LanguageType, with_genres: string): Promise<ResponseServer<UpcomingMoviesResponse>> {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/peli_smith/movies_popular?page=${page}&language=${language}&with_genres=${with_genres}`,
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
            data: {
                page: 0,
                total_pages: 0,
                total_results: 0,
                results: [],
            }
        }
    }
}