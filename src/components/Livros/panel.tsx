import { Button, Card } from 'react-bootstrap';
import React, { useState } from "react"
import { BookRegistrationModal } from '../Shared/Modals/BookModals/book-registration-modal';

export const BookPanel = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const newBook = () => {
        const changeDisplay = !showModal;
        setShowModal(changeDisplay);
    }

    return (
        <>
            <Card>
                <Card.Header>Livros</Card.Header>
                <Card.Body>
                    <Card.Title>Painel de controle | Livros</Card.Title>
                    <Button variant="primary" onClick={() => newBook()}>
                        Novo Livro
                    </Button>
                </Card.Body>
            </Card>
            <BookRegistrationModal displayModal={showModal} />
        </>
    )
}