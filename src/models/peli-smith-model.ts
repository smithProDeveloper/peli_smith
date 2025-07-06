export interface UpcomingMoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title?: string;
    original_name?: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string; // formato ISO (YYYY-MM-DD)
    title?: string;
    name?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesStarting {
    moviesPopular: Movie[];
    moviesTopRated: Movie[];
    moviesUpcoming: Movie[];
    moviesNowPlaying: Movie[];
    moviesLatest: Movie[];
    seriesPopular: Movie[];
    seriesTopRated: Movie[];
    seriesOnTheAir: Movie[];
    seriesAiringToday: Movie[];
}

