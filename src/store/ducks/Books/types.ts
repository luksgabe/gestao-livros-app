import { Status } from '../Util/enums';
import { Author } from '../Authors/types';

export enum BooksTypes {
    GET_BOOKS = "@books/GET_BOOKS",
    LOAD_BOOKS = "@books/LOAD_BOOKS",
}

export interface Book {
    id: number;
    title: string;
    synopsis: string;
    priceAverage: number;
    classification: number;
    publicationDate: Date;
    authorId: number;
    author: Author;
    createdAt: Date;
    updatedAt: Date;
    status: Status;
}

export interface BooksState {
    data: Book[];
    loading: boolean;
    error: boolean;
}