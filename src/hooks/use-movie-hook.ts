import type {LanguageType} from "../models/types/language-type";
import type {MoviesStarting} from "../models/peli-smith-model";
import {useState} from "react";
import {getMoviesCurrentlyPlayingQuery} from "../queries/get-movies-currently-playing-query";

export default function useMovieHook() {

    const [loadMovie, setLoadMovie] = useState<boolean>(false);
    const [moviesStarting, setMoviesStarting] = useState<MoviesStarting>({
        moviesPopular: [], moviesUpcoming: [], moviesTopRated: [], moviesLatest: [], moviesNowPlaying: [], seriesTopRated: [], seriesPopular: [], seriesAiringToday: [], seriesOnTheAir: [],
    });

    async function getMoviesCurrentlyPlaying(language: LanguageType): Promise<void> {
        setLoadMovie(true);
        const response = await getMoviesCurrentlyPlayingQuery(language);
        if (response.status === 200) {
            setMoviesStarting(response.data);
            setLoadMovie(false);
            return;
        }
        setMoviesStarting({
            moviesPopular: [], moviesUpcoming: [], moviesTopRated: [], moviesLatest: [], moviesNowPlaying: [], seriesTopRated: [], seriesPopular: [], seriesAiringToday: [], seriesOnTheAir: [],
        });
        setLoadMovie(false);
    }

    return {
        getMoviesCurrentlyPlaying,

        moviesStarting,
        loadMovie,
    };
}