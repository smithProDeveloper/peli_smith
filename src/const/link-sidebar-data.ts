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
            {name: 'Películas recientes', path: ''},
            {name: 'Películas recientes', path: ''},
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