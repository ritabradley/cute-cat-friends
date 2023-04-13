import { CHANGE_SEARCH_TERM, REQUEST_CATS_PENDING, REQUEST_CATS_SUCCESS, REQUEST_CATS_FAILED } from '../constants';

const initialStateSearch = {
    searchTerm: '',
};

export const searchCats = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        default:
            return state;
    }
};

const initialStateCats = {
    cats: [],
    isPending: false,
    error: '',
};

export const requestCats = (state = initialStateCats, action = {}) => {
    switch (action.type) {
        case REQUEST_CATS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_CATS_SUCCESS:
            return { ...state, cats: action.payload, isPending: false };
        case REQUEST_CATS_FAILED:
            return { ...state, error: action.payload, isPending: false };
        default:
            return state;
    }
};
