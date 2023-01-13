import React from "react";
import { Book } from "../../store/ducks/Books/types";

export const BookList = ({books = [] as Book[]}) => {
    const renderDataTable = (books: Book[] | undefined) => {
        if(books && books.length > 0) {
            return (
                books.map((book: Book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author ?  book.author.name : 'Indefinido'}</td>
                        <td>{'Indefinido'}</td>
                        <td>{book.createdAt}</td>
                    </tr>
                ))
            )
        } else {
            return (
                <tr>
                    <td colSpan={4} align="center">Nenhum dado encontrado</td>
                </tr>
            )
        }
    }

    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Gêneros</th>
                    <th>Data Cadastro</th>
                </tr>
            </thead>
            <tbody>
                {renderDataTable(books)}
            </tbody>
        </table>
    );

}