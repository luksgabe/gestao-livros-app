import { useCallback, useState } from "react"
import { BookService } from "../services/api";
import { Author } from "../store/ducks/Authors/types";

import { Book } from "../store/ducks/Books/types";

export const useBook = () => {
    const [books, setBooks] = useState<Book[]>();


    const getAll = useCallback(async () => {
        const { status, data } = await BookService.getAll();

        if(status != 200) throw Error();

        setBooks(data);
    }, [])

    const postBook = useCallback(async (book: Book) => {
        const { status, data } = await BookService.postBook(book);
        if(status != 200)
            throw Error();
    }, [])

    const formatBookData = (data: any): Book =>(
        {
          id: 0,
          title: data.target.title.value,
          synopsis: data.target.synopsis.value,
          classification: +data.target.classification.value,
          publicationDate: data.target.publicationDate.value,
          priceAverage: +data.target.priceAverage.value,
          authorId: +data.target?.authorValue,
          author: {} as Author,
          createdAt: new Date(),
          updatedAt: new Date(),
          status: 1
        }
      )
    
    
    return {
        books,
        getAll,
        postBook,
        formatBookData
    }
}