import { useCallback, useState } from "react";
import { AuthorService } from "../services/api/author.services";
import { Author } from "../store/ducks/Authors/types";
import { Book } from "../store/ducks/Books/types";

export const useAuthor = () => {
    const [authors, setAuthor] = useState<Author[]>();


    const getAll = useCallback(async () => {
        const { status, data } = await AuthorService.getAll();

        if(status != 200) throw Error();

        setAuthor(data);
    }, [])
        return {
        authors,
        getAll
    }    
}