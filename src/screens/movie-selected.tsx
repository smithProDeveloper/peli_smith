import {useEffect} from "react";
import {useAppDispatch} from "../hooks/store-hook";
import {setNavSelected} from "../store/actions/nav-actions";
import useTheme from "../hooks/use-theme.ts";
import useMovieHook from "../hooks/use-movie-hook.ts";
import LoadModal from "../components/load-modal.tsx";
import {useParams} from "react-router-dom";
import {linkSingleMovieSidebarData} from "../const/link-single-movie-sidebar-data.ts";
import DropDownLink from "../components/drop-down-link.tsx";

export default function MovieSelected() {

    const {darkMode, language} = useTheme();
    const {getSingleMovie, singleMovie, loadMovie} = useMovieHook();
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getSingleMovie(id, language).then(() => {
            });
            return;
        }
        alert(`No le has pasado el id de la película`);
    }, [language]);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setNavSelected({linkName: 'Películas', dropLinkName: ''}));
    }, []);

    useEffect(() => {
        console.log(singleMovie);
    }, [singleMovie]);

    return (
        <>
            {loadMovie && !singleMovie &&
                <LoadModal/>
            }
            {!loadMovie && singleMovie &&
                <>
                    <div
                        className="relative w-full h-[94vh] bg-center bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: `url(${singleMovie.backdrop_path
                                ? `https://image.tmdb.org/t/p/w1280${singleMovie.backdrop_path}`
                                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                            })`
                        }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-6 mx-auto
                                    bg-background/80 dark:bg-background-dark/80 shadow-lg"
                        >
                            {/* sidebar del single movie */}
                            <div
                                className="flex items-center justify-center gap-3 font-inter bg-background/70
                                    dark:bg-background-dark/70 text-text dark:text-text-dark py-2"
                            >
                                {linkSingleMovieSidebarData.map((link, index) => (
                                    <DropDownLink
                                        key={index}
                                        data={link}
                                        darkMode={darkMode}
                                        handleRedirect={(path) => console.log("Redirect to" + path)}
                                    />
                                ))}
                            </div>

                            <div className="flex">
                                {/* Imagen del póster */}
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <img
                                        src={
                                            singleMovie.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`
                                                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                                        }
                                        alt={singleMovie.title}
                                        className="w-full max-w-[300px] rounded-lg shadow-md object-cover"
                                    />
                                </div>

                                {/* Contenido textual */}
                                <div className="w-full md:w-2/3 text-text dark:text-text-dark space-y-4">
                                    <h1 className="text-2xl md:text-4xl font-bold">{singleMovie.title}</h1>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        {singleMovie.overview || 'No hay descripción disponible para esta película.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}
