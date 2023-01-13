import { BOOK_ENDPOINTS } from "../../constants/services";
import { Api } from "../../providers";
import { Book } from "../../store/ducks/Books/types";

const getAll = () => Api.get(`/${BOOK_ENDPOINTS.BASE}`);

const postBook = async (book: Book) => {
    const response = await Api.post(`/${BOOK_ENDPOINTS.BASE}`, book);
    return response;
}

export const BookService = {
    getAll,
    postBook
}