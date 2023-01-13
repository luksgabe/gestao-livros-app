import { Book } from '../Books/types';
import { Status } from '../Util/enums';

export enum BooksTypes {
    LOAD_REQUEST = "@books/LOAD_REQUEST",
    LOAD_SUCCESS = "@books/LOAD_SUCCESS",
    LOAD_FAILURE = "@books/LOAD_FAILURE",
}

export interface Author {
    id: number;
    name: string;
    books: Book[];
    createdAt: Date;
    updatedAt: Date;
    status: Status;
}

export interface BooksState {
    data: Book[];
    loading: boolean;
    error: boolean;
}