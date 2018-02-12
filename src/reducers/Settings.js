import {DARK_INDIGO} from "constants/ColorThemes";
import {FIXED_DRAWER, TOGGLE_COLLAPSED_NAV} from "constants/ActionTypes";

const initialSettings = {
    navCollapsed: false,
    drawerType: FIXED_DRAWER,
    themeColor: DARK_INDIGO // for theme's color change class="dark-indigo" in index.html in public dir
};

const settings = (state = initialSettings, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                navCollapsed: false
            };
        case TOGGLE_COLLAPSED_NAV:
            return {
                ...state,
                navCollapsed: action.isNavCollapsed
            };
        default:
            return state;
    }
};

export default settings;
