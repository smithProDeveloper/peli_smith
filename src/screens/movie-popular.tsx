import {useEffect, useState} from "react";
import {useAppDispatch} from "../hooks/store-hook";
import {setNavSelected} from "../store/actions/nav-actions";
import SubTitle from "../components/sub-title.tsx";
import useTheme from "../hooks/use-theme.ts";
import useMovieHook from "../hooks/use-movie-hook.ts";
import GenderSelect from "../components/gender-select.tsx";
import LoadModal from "../components/load-modal.tsx";
import PaginationBar from "../components/pagination-bar.tsx";
import MovieCard from "../components/movie-card.tsx";

export default function MoviePopular() {

    const {darkMode, language} = useTheme();
    const {getMoviesPopular, movieGenders, moviesPopular, loadMovie} = useMovieHook();
    const dispatch = useAppDispatch();
    const [gender, setGender] = useState<number>(0);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        getMoviesPopular(page.toString(), language, gender.toString()).then(() => {});
    }, [page, language, gender]);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setNavSelected({linkName: 'Películas', dropLinkName: 'Populares'}));
    }, []);

    function onPageChange(page: number) {
        setPage(page);
    }

    return (
        <>
            {loadMovie &&
                <LoadModal/>
            }
            {!loadMovie &&
                <div className="p-4">
                    <SubTitle darkMode={darkMode}>
                        Películas populares
                    </SubTitle>

                    <GenderSelect
                        darkMode={darkMode}
                        movieGenders={movieGenders}
                        setGender={setGender}
                    />

                    <PaginationBar
                        darkMode={darkMode}
                        currentPage={page}
                        totalPages={moviesPopular.total_pages}
                        onPageChange={onPageChange}
                    />

                    <div className="grid grid-cols-5 gap-6">
                        {moviesPopular.results.map((movie, index) => (
                            <MovieCard
                                key={index}
                                item={movie}
                            />
                        ))}
                    </div>

                    <PaginationBar
                        darkMode={darkMode}
                        currentPage={page}
                        totalPages={moviesPopular.total_pages}
                        onPageChange={onPageChange}
                    />
                </div>
            }
        </>
    );
}
