import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function ModalEdicao({ idfuncionario }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    salario: "",
    aniversario: "",
    cargo: "",
  });

  const handlerSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/funcionarios/${idfuncionario}`, {
        name: formValues.nome,
        email: formValues.email,
        salario: formValues.salario,
        aniversario: formValues.aniversario,
        cargo: formValues.cargo,
      })
      .then((resposta) => {
        alert("Funcionario editado com sucesso!");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  /*
        axios.get(`http://localhost:3001/funcionarios/${idfuncionario}`)

        axios.post(`http://localhost:3001/funcionarios`,{
            name: formValues.nome,
            email: formValues.email,
            salario: formValues.salario,
            aniversario: formValues.aniversario,
            cargo: formValues.cargo,
        })

        axios.delete(`http://localhost:3001/funcionarios/${idfuncionario}`)
    */

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        <ArrowUpIcon />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="nome">Nome:</FormLabel>
              <Input
                id="nome"
                placeholder="Digite o nome"
                value={formValues.nome}
                onChange={(event) =>
                  setFormValues({ ...formValues, nome: event.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="E-mail">E-mail:</FormLabel>
              <Input
                id="email"
                placeholder="Digite o E-mail"
                value={formValues.email}
                onChange={(event) =>
                  setFormValues({ ...formValues, email: event.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="salario">Salario:</FormLabel>
              <Input
                id="salario"
                placeholder="Digite o Salario"
                value={formValues.salario}
                onChange={(event) =>
                  setFormValues({ ...formValues, salario: event.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="aniversario">Aniversario:</FormLabel>
              <Input
                id="aniversario"
                placeholder="Digite seu Aniversario"
                value={formValues.aniversario}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    aniversario: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cargo">Cargo:</FormLabel>
              <Input
                id="cargo"
                placeholder="Digite seu Cargo"
                value={formValues.cargo}
                onChange={(event) =>
                  setFormValues({ ...formValues, cargo: event.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mt={4} colorScheme="teal" onClick={handlerSubmit}>
              Salvar
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
