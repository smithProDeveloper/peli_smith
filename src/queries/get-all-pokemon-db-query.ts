import axios from 'axios';
import {urlApi} from "../const/url-api.ts";

export async function getAllPokemonDbQuery(page: number, limit: number) {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${urlApi}/api/pokemon/all_pokemon_db?page=${page.toString()}&limit=${limit.toString()}`,
        headers: {
            'Accept': 'application/json',
            // 'authorization': `Bearer ${token}`
        },
    };
    try {
        const response = await axios.request(config);
        return response.data;
    } catch (error) {
        console.log('Error getCryptoSecretKeyQuery');
        console.log(error);
        return {
            status: 500,
            message: 'Internal server error',
            data: {
                totalCount: 0,
                results: []
            }
        }
    }
}