import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Router from "./routes/router.tsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {ThemeProvider} from "./context/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <Router/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
