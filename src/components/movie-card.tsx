import type {Movie} from "../models/peli-smith-model";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    item: Movie;
}

export default function MovieCard({item}: Props) {

    const navigate = useNavigate();
    const [imgError, setImgError] = useState(false);

    function handleSelectedMovie(id: number) {
        navigate(`/peli_smith/movie/selected/${id.toString()}`);
    }

    return (
        <button
            className="bg-text-secondary aspect-[2/3] rounded-xl overflow-hidden shadow-md w-full relative"
            onClick={() => handleSelectedMovie(item.id)}
        >
            {!imgError ? (
                <>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white p-2 rounded-md text-sm max-w-full">
                        <p className="font-semibold leading-tight break-words">
                            {item.original_title ? item.original_title : item.original_name}
                        </p>
                        <p lang="zh" className="text-gray-300 text-xs italic break-words">
                            {item.title ? item.title : item.name}
                        </p>
                    </div>
                </>
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-4 text-sm text-center">
                    <p className="font-semibold leading-tight break-words">
                        {item.original_title ? item.original_title : item.original_name}
                    </p>
                    <p lang="zh" className="text-gray-300 text-xs italic break-words">
                        {item.title ? item.title : item.name}
                    </p>
                </div>
            )}
        </button>
    );
}
