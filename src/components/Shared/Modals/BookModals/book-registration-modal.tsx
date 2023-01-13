import { Modal, Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { Book } from "../../../../store/ducks/Books/types";
import { Author } from "../../../../store/ducks/Authors/types";
import { useAuthor } from "../../../../hooks/useAuthor";
import { useBook } from "../../../../hooks";

interface ModalProps {
  displayModal: boolean,
  bookId?: number
}

export function BookRegistrationModal(props: ModalProps) {
  const [lgShow, setLgShow] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>("Novo Livro");
  const [authorValue, setAuthorValue] = useState<string>("");
  const { getAll, authors } = useAuthor();
  const { formatBookData, postBook } = useBook();


  const submitModal = async (event: any) => {
    event.preventDefault();
    const newBook = getFormData(event);
    await postBook(newBook);

    setLgShow(false);
  }

  const getFormData = (event: any) :Book => {
    let bookFormated = formatBookData(event);
    bookFormated.authorId = +authorValue;
    return bookFormated;
  }

  useEffect(() => {
    setLgShow(props.displayModal);

    const title = props.bookId ? "Editar Livro" : "Novo Livro";
    setModalTitle(title);
    getAll();
  }, [props.displayModal, getAll])

    return (
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitModal}>
          <Form.Group className="mb-3" id="title">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" name="title" required id="title" placeholder="Título" />
          </Form.Group>      
          <Form.Group>  
            <Form.Label>Sinopse</Form.Label>
            <Form.Control
              name="synopsis" id="synopsis" as="textarea" placeholder="Sinopse" required
              style={{ height: '100px' }}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Data de publicação:</Form.Label>
            <Form.Control type="date" name="publicationDate" id="publicationDate" placeholder="Data de publicação"/>
          </Form.Group>
          <Form.Label>Autor:</Form.Label>
          <Form.Control as="select" value={authorValue} required onChange={e => {setAuthorValue(e.target.value)}}>
          {authors?.map(a => {
            debugger
            return (<>
              {/* <option key={0} value={"0"}>Selecione um autor</option> */}
              <option key={a.id} value={a.id}>{a.name}</option>
            </>)
          })}
          </Form.Control>
          <Form.Group className="mb-3" id="priceAverage">
            <Form.Label>Média de Preço</Form.Label>
            <Form.Control type="number" name="priceAverage" id="priceAverage" required placeholder="Média de Preço" />
          </Form.Group> 
          <Form.Group className="mb-3" id="classification">
              <Form.Label>Classificação</Form.Label>
              <Form.Control type="text" name="classification" id="classification" required placeholder="Classificação" />
          </Form.Group>
          <Button variant="primary" type="submit">Enviar</Button>
        </Form>        
      </Modal.Body>
    </Modal>
    );
  }
  