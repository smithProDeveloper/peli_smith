import axios from 'axios';
import {urlApi} from "../const/url-api.ts";
import type {LanguageType} from "../models/types/language-type.ts";
import type {GenderModel} from "../models/genderModel.ts";
import type {ResponseServer} from "../models/response-server.ts";

export async function getGendersMovieQuery(language: LanguageType): Promise<ResponseServer<GenderModel[]>> {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/peli_smith/genders_movie?language=${language}`,
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
            data: []
        }
    }
}