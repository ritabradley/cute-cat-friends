import { CHANGE_SEARCH_TERM } from '../constants';

export const setSearchTerm = (text) => ({
    type: CHANGE_SEARCH_TERM,
    payload: text,
});
