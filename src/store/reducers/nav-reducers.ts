import {SET_NAV_SELECTED} from "../types/nav-types.ts";
import type {LinkSelectedModel} from "../../models/link-sidebar-data-model.ts";

interface IStateNav {
    navSelected: LinkSelectedModel;
}

const initialStateNav: IStateNav = {
    navSelected: {linkName: 'Home', dropLinkName: ''},
}

const navReducer = function (state = initialStateNav, action: {type:string; payload:any}):IStateNav {
    switch (action.type) {
        case SET_NAV_SELECTED:
            return {
                navSelected: action.payload,
            };
        default:
            return state;
    }
}

export default navReducer;
