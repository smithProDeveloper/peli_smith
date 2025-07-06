import axios from 'axios';
import {urlApi} from "../const/url-api.ts";
import type {LanguageType} from "../models/types/language-type.ts";
import type {ResponseServer} from "../models/response-server.ts";
import type {MoviesStarting} from "../models/peli-smith-model.ts";

export async function getMoviesCurrentlyPlayingQuery(language: LanguageType): Promise<ResponseServer<MoviesStarting>> {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/peli_smith/movies_starting_random?language=${language}`,
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
                moviesPopular: [], moviesUpcoming: [], moviesTopRated: [], moviesLatest: [], moviesNowPlaying: [], seriesTopRated: [], seriesPopular: [], seriesAiringToday: [], seriesOnTheAir: [],
            }
        }
    }
}