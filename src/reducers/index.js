import { CHANGE_SEARCH_TERM } from '../constants';

const initialState = {
    cats: [],
    searchTerm: '',
};

export const searchCats = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        default:
            return state;
    }
};
