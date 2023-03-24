import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Alert from 'react-bootstrap/Alert';
import "./SuperForm.css"
import { useState } from "react";

export function SuperForm() {

    const { register, handleSubmit } = useForm();
    const [heroi, setHeroi] = useState();

    function superSubmit(heroi) {
      setHeroi(heroi);
    }

    // let mensagem = `
    //         Nome: ${heroi.nome}
    //         Poder: ${heroi.poder}
    //         Fraqueza: ${heroi.fraqueza}
    //         História: ${heroi.historia}
    //     `;
    //     alert(mensagem);

  return (
    <div>
        <h1>FAÇA O SEU <strong>SUPER</strong> CADASTRO</h1>
      <Form onSubmit={handleSubmit(superSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control {...register("nome")} id="nome" type="text" placeholder="Digite seu Super nome" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Poder</Form.Label>
          <Form.Control {...register("poder")} id="poder" type="text" placeholder="Digite o seu Super poder" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fraqueza</Form.Label>
          <Form.Control {...register("fraqueza")} id="fraqueza" type="text" placeholder="Digite a sua Super fraqueza" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>História</Form.Label>
          <textarea {...register("historia")} id="historia" class="form-control" rows="3"></textarea>
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Form>
      
      <br />

      {
      heroi && 
      <Alert variant="dark">
        Nome: {heroi.nome} <br />
        Poder: {heroi.poder} <br />
        Fraqueza: {heroi.fraqueza} <br />
        História: {heroi.historia} <br />
        </Alert>
        }
    </div>
  );
}
