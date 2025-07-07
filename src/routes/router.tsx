import {Toaster} from "react-hot-toast";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../screens/home.tsx";
import Layout from "../layouts/layout.tsx";
import MovieUpcoming from "../screens/movie-upcoming";
import MoviePopular from "../screens/movie-popular.tsx";
import MovieTopRated from "../screens/movie-top-rated.tsx";
import MovieNowPlaying from "../screens/movie-now-playing.tsx";
import MovieSelected from "../screens/movie-selected.tsx";


export default function Router() {

    return (
        <div>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
                containerClassName="max-w-full overflow-hidden"
                toastOptions={{
                    className: 'text-white bg-red-500',
                }}
            />
            <Routes>
                <Route path="/peli_smith" element={<Layout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="movie/upcoming" element={<MovieUpcoming/>}/>
                    <Route path="movie/popular" element={<MoviePopular/>}/>
                    <Route path="movie/top_rated" element={<MovieTopRated/>}/>
                    <Route path="movie/now_playing" element={<MovieNowPlaying/>}/>
                    <Route path="movie/selected/:id" element={<MovieSelected/>}/>
                    <Route index element={<Navigate to="home"/>}/>
                </Route>

                <Route index element={ <Navigate to="/peli_smith"/> }/>
            </Routes>
        </div>
    );
}