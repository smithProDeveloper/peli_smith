import {useEffect} from "react";
import useTheme from "../hooks/use-theme.ts";
import SubTitle from "../components/sub-title.tsx";
import MovieSlider from "../components/movie-slider.tsx";
import ButtonLink from "../components/button-link";
import useMovieHook from "../hooks/use-movie-hook";
import LoadModal from "../components/load-modal";
import {useAppDispatch} from "../hooks/store-hook";
import {setNavSelected} from "../store/actions/nav-actions";

export default function Home() {

    const { darkMode, language } = useTheme();
    const { moviesStarting, loadMovie, getMoviesCurrentlyPlaying } = useMovieHook();
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setNavSelected({linkName: 'Home', dropLinkName: ''}));
    }, []);

    useEffect(() => {
        getMoviesCurrentlyPlaying(language).then(() => {});
    }, [language]);

    return (
        <>
            {loadMovie &&
                <LoadModal/>
            }

            {!loadMovie &&
                <div className="p-4">
                    {/* upcoming movie */}
                    <div className="flex items-center justify-between w-full pr-6">
                        <SubTitle darkMode={darkMode}>
                            Próximos estrenos (películas futuras)
                        </SubTitle>
                        <ButtonLink darkMode={darkMode} to='/peli_smith/movie/upcoming'>
                            Ver más...
                        </ButtonLink>
                    </div>
                    <MovieSlider
                        items={moviesStarting.moviesUpcoming}
                    />

                    {/* popular movie */}
                    <div className="flex items-center justify-between w-full pr-6">
                        <SubTitle darkMode={darkMode}>
                            Películas populares
                        </SubTitle>
                        <ButtonLink darkMode={darkMode} to='/peli_smith/movie/popular'>
                            Ver más...
                        </ButtonLink>
                    </div>
                    <MovieSlider
                        items={moviesStarting.moviesPopular}
                    />

                    {/* top rated movie */}
                    <div className="flex items-center justify-between w-full pr-6">
                        <SubTitle darkMode={darkMode}>
                            Películas mejor calificadas
                        </SubTitle>
                        <ButtonLink darkMode={darkMode} to=''>
                            Ver más...
                        </ButtonLink>
                    </div>
                    <MovieSlider
                        items={moviesStarting.moviesTopRated}
                    />

                    <div className="flex items-center justify-between w-full pr-6">
                        <SubTitle darkMode={darkMode}>
                            Películas en cartelera
                        </SubTitle>
                        <ButtonLink darkMode={darkMode} to='/peli_smith/movie/now_playing'>
                            Ver más...
                        </ButtonLink>
                    </div>
                    <MovieSlider
                        items={moviesStarting.moviesNowPlaying}
                    />

                    {/* series */}
                    <div className="flex items-center justify-between w-full pr-6">
                        <SubTitle darkMode={darkMode}>
                            Próximos estrenos (series futuras)
                        </SubTitle>
                        <ButtonLink darkMode={darkMode} to=''>
                            Ver más...
                        </ButtonLink>
                    </div>
                    <MovieSlider
                        items={moviesStarting.seriesOnTheAir}
                    />

                    <div className="flex items-center justify-between w-full pr-6">
                        <SubTitle darkMode={darkMode}>
                            Series populares ahora mismo
                        </SubTitle>
                        <ButtonLink darkMode={darkMode} to=''>
                            Ver más...
                        </ButtonLink>
                    </div>
                    <MovieSlider
                        items={moviesStarting.seriesPopular}
                    />

                    <div className="flex items-center justify-between w-full pr-6">
                        <SubTitle darkMode={darkMode}>
                            Series mejor calificadas
                        </SubTitle>
                        <ButtonLink darkMode={darkMode} to=''>
                            Ver más...
                        </ButtonLink>
                    </div>
                    <MovieSlider
                        items={moviesStarting.seriesTopRated}
                    />
                </div>
            }
        </>
    );
}
