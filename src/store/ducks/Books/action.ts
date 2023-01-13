import { action } from "typesafe-actions";
import { BooksTypes, Book } from './types';

export const getBooks = () => action(BooksTypes.GET_BOOKS);
export const loadBooks = (data: Book[]) => action(BooksTypes.LOAD_BOOKS, { data });
