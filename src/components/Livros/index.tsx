import React, { useEffect } from 'react';
import { useBook } from '../../hooks';

import { Book } from '../../store/ducks/Books/types';
import { BookList } from './list';
import { BookPanel } from './panel';

import '../../styles/book-components/index.css';

export const Livros = () =>  {
    const { getAll, books } = useBook();

    useEffect(() => {
        getAll();
    }, [getAll])

    return (
        <> 
            <BookPanel />
            <BookList books={books} />
        </>
    );

}
