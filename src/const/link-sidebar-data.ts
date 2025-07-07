import type {LinkSidebarDataModel} from "../models/link-sidebar-data-model.ts";

export const linkSidebarData: LinkSidebarDataModel[] = [
    {
        linkName: 'Home',
        pathLinkName: '/peli_smith/home',
        dropDownLinkList: [],
    },
    {
        linkName: 'Películas',
        pathLinkName: null,
        dropDownLinkList: [
            {name: 'Próximos estrenos', path: '/peli_smith/movie/upcoming'},
            {name: 'Populares', path: '/peli_smith/movie/popular'},
            {name: 'Mejor calificadas', path: '/peli_smith/movie/top_rated'},
            {name: 'En cartelera', path: '/peli_smith/movie/now_playing'},
        ],
    },
    {
        linkName: 'Series',
        pathLinkName: null,
        dropDownLinkList: [
            {name: 'Series recientes', path: ''},
            {name: 'Series recientes', path: ''},
            {name: 'Series recientes', path: ''},
        ],
    },
];