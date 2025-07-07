import type {GenderModel} from "./genderModel";

export interface SingleMovieModel {
    id: number;
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | BelongsToCollection;
    budget: number;
    homepage: string | null;
    imdb_id: string | null;
    original_language: string;
    original_title?: string;
    original_name?: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string | null;
    revenue: number;
    runtime: number | null;
    status: string;
    tagline: string | null;
    title?: string;
    name?: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
    genres: GenderModel[];
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    spoken_languages: SpokenLanguages[];
    videos: Videos;
    images: ImagesMovie;
    credits: CreditsMovie;
}

export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export interface ProductionCompanies {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface Videos {
    results: ResultsVideos[];
}

export interface ResultsVideos {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
}

export interface ImagesMovie {
    backdrops: any[];
    logos: any[];
    posters: any[];
}

export interface CreditsMovie {
    cast: CastMovie[];
    crew: CrewMovie[];
}

export interface CastMovie {
    id: number;
    adult: boolean;
    gender: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface CrewMovie {
    id: number;
    adult: boolean;
    gender: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}
