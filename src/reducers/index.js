import { CHANGE_SEARCH_TERM } from '../constants';

const initialState = {
    cats: [],
    searchField: '',
};

export const searchCats = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TERM:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
};
