import { AxiosResponse } from "axios";
import { takeLatest, all, call, put } from "redux-saga/effects";
import { loadBooks } from "./action";
import { Book, BooksTypes } from './types';

export function* getAllBooks() {
    try {
      // const response: AxiosResponse<Book[]> = yield call(useApi.call, "book");
      // yield put(loadBooks(response.data));
    } catch (err) {
      console.log(`Erro:${err}`)
    }
  }
  
export default all([
  takeLatest(BooksTypes.GET_BOOKS, getAllBooks)
])