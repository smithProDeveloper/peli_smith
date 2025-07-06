import {useEffect} from "react";
import {useAppDispatch} from "../hooks/store-hook";
import {setNavSelected} from "../store/actions/nav-actions";

export default function MovieUpcoming() {

    // const { darkMode, language } = useTheme();
    // const { moviesStarting, loadMovie, getMoviesCurrentlyPlaying } = useMovieHook();
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setNavSelected({linkName: 'Películas', dropLinkName: 'Próximos estrenos'}));
    }, []);

    return (
        <>
            {/*{loadMovie &&*/}
            {/*    <LoadModal/>*/}
            {/*}*/}
            <h1>soy el movie upcoming</h1>
        </>
    );
}
