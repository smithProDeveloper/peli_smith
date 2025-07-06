import {SET_NAV_SELECTED} from "../types/nav-types.ts";
import type {LinkSelectedModel} from "../../models/link-sidebar-data-model.ts";

export const setNavSelected = (navSelected: LinkSelectedModel) => (dispatch: (arg0: { type: string; payload: LinkSelectedModel; }) => void) => {
    dispatch({
        type: SET_NAV_SELECTED,
        payload: navSelected
    })
}