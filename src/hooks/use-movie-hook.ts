import type {LanguageType} from "../models/types/language-type";
import type {MoviesStarting, UpcomingMoviesResponse} from "../models/peli-smith-model";
import {useState} from "react";
import {getMoviesCurrentlyPlayingQuery} from "../queries/get-movies-currently-playing-query";
import {getGendersMovieQuery} from "../queries/get-genders-movie-query.ts";
import type {GenderModel} from "../models/genderModel.ts";
import {getMoviesUpcomingQuery} from "../queries/get-movies-upcoming-query.ts";
import {getMoviesPopularQuery} from "../queries/get-movies-popular-query.ts";
import {getMoviesTopRatedQuery} from "../queries/get-movies-top-rated-query.ts";
import {getMoviesNowPlayingQuery} from "../queries/get-movies-now-playing-query.ts";
import type {SingleMovieModel} from "../models/single-movie-model.ts";
import {getSingleMovieQuery} from "../queries/get-single-movie-query.ts";

export default function useMovieHook() {

    const [loadMovie, setLoadMovie] = useState<boolean>(false);
    const [moviesStarting, setMoviesStarting] = useState<MoviesStarting>({
        moviesPopular: [],
        moviesUpcoming: [],
        moviesTopRated: [],
        moviesLatest: [],
        moviesNowPlaying: [],
        seriesTopRated: [],
        seriesPopular: [],
        seriesAiringToday: [],
        seriesOnTheAir: [],
    });
    const [movieGenders, setMovieGenders] = useState<GenderModel[]>([]);
    const [moviesUpcoming, setMoviesUpcoming] = useState<UpcomingMoviesResponse>({
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: []
    });
    const [moviesPopular, setMoviesPopular] = useState<UpcomingMoviesResponse>({
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: []
    });
    const [moviesTopRated, setMoviesTopRated] = useState<UpcomingMoviesResponse>({
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: []
    });
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<UpcomingMoviesResponse>({
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: []
    });
    const [singleMovie, setSingleMovie] = useState<SingleMovieModel | null>(null);

    async function getMoviesCurrentlyPlaying(language: LanguageType): Promise<void> {
        setLoadMovie(true);
        const response = await getMoviesCurrentlyPlayingQuery(language);
        if (response.status === 200) {
            setMoviesStarting(response.data);
            setLoadMovie(false);
            return;
        }
        setMoviesStarting({
            moviesPopular: [],
            moviesUpcoming: [],
            moviesTopRated: [],
            moviesLatest: [],
            moviesNowPlaying: [],
            seriesTopRated: [],
            seriesPopular: [],
            seriesAiringToday: [],
            seriesOnTheAir: [],
        });
        setLoadMovie(false);
    }

    async function getGendersMovie(language: LanguageType): Promise<void> {
        // setLoadMovie(true);
        const response = await getGendersMovieQuery(language);
        if (response.status === 200) {
            setMovieGenders(response.data);
            // setLoadMovie(false);
            return;
        }
        // setLoadMovie(false);
    }

    async function getMoviesUpcoming(page: string, language: LanguageType, with_genres: string): Promise<void> {
        setLoadMovie(true);
        const response = await getMoviesUpcomingQuery(page, language, with_genres);
        if (response.status === 200) {
            setMoviesUpcoming(response.data);
            setLoadMovie(false);
            await getGendersMovie(language);
            return;
        }
        setMoviesUpcoming(response.data);
    }

    async function getMoviesPopular(page: string, language: LanguageType, with_genres: string): Promise<void> {
        setLoadMovie(true);
        const response = await getMoviesPopularQuery(page, language, with_genres);
        if (response.status === 200) {
            setMoviesPopular(response.data);
            setLoadMovie(false);
            await getGendersMovie(language);
            return;
        }
        setMoviesPopular(response.data);
    }

    async function getMoviesTopRated(page: string, language: LanguageType, with_genres: string): Promise<void> {
        setLoadMovie(true);
        const response = await getMoviesTopRatedQuery(page, language, with_genres);
        if (response.status === 200) {
            setMoviesTopRated(response.data);
            setLoadMovie(false);
            await getGendersMovie(language);
            return;
        }
        setMoviesTopRated(response.data);
    }

    async function getMoviesNowPlaying(page: string, language: LanguageType, with_genres: string): Promise<void> {
        setLoadMovie(true);
        const response = await getMoviesNowPlayingQuery(page, language, with_genres);
        if (response.status === 200) {
            setMoviesNowPlaying(response.data);
            setLoadMovie(false);
            await getGendersMovie(language);
            return;
        }
        setMoviesNowPlaying(response.data);
    }

    async function getSingleMovie(movie_id: string, language: LanguageType): Promise<void> {
        setLoadMovie(true);
        const response = await getSingleMovieQuery(movie_id, language);
        if (response.status === 200) {
            setSingleMovie(response.data);
            setLoadMovie(false);
            return;
        }
        setSingleMovie(response.data);
        setLoadMovie(false);
    }

    return {
        getMoviesCurrentlyPlaying,
        getGendersMovie,
        getMoviesUpcoming,
        getMoviesPopular,
        getMoviesTopRated,
        getMoviesNowPlaying,
        getSingleMovie,

        moviesStarting,
        loadMovie,
        movieGenders,
        moviesUpcoming,
        moviesPopular,
        moviesTopRated,
        moviesNowPlaying,
        singleMovie,
    };
}