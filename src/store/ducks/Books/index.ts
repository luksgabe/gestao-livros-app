import { BooksState, BooksTypes } from './types';
import { Reducer } from "redux";

const INITIAL_STATE: BooksState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<BooksState> = (state: BooksState = INITIAL_STATE, action) => {
    switch (action.type) {
        case BooksTypes.GET_BOOKS:
            return { ...state, loading: true };
        case BooksTypes.LOAD_BOOKS: 
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data,
            };
        default: 
            return state;
    }
};

export default reducer;