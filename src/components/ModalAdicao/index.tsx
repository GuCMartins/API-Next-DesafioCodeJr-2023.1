import {
  Button,
  Center,
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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AddIcon } from "@chakra-ui/icons"; 
import { useRouter } from 'next/router';

export default function ModalAdicao() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    salario: "",
    aniversario: "",
    cargo: "",
  });

  const handlerAdition = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/funcionarios`, {
        name: formValues.nome,
        email: formValues.email,
        salario: formValues.salario,
        aniversario: formValues.aniversario,
        cargo: formValues.cargo,
      })
      .then((resposta) => {
        // alert("Funcionario editado com sucesso!");
        router.reload();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <>
      <Button m={1} bg="black" onClick={onOpen}>
        <AddIcon />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="nome">Nome:</FormLabel>
              <Input
                id="nome"
                placeholder="Digite o nome"
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
                type={"email"}
                onChange={(event) =>
                  setFormValues({ ...formValues, email: event.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="salario">Salario:</FormLabel>
              <Input
                id="salario"
                placeholder="Digite o salário"
                type={"number"}
                onChange={(event) =>
                  setFormValues({ ...formValues, salario: event.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="aniversario">Aniversario:</FormLabel>
              <Input
                id="aniversario"
                placeholder="Digite a data aniversario"
                type={"date"}
                onChange={(event) =>
                  setFormValues({ ...formValues, aniversario: event.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cargo">Cargo:</FormLabel>
              <Input
                id="cargo"
                placeholder="Digite o cargo"
                onChange={(event) =>
                  setFormValues({ ...formValues, cargo: event.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
          <Stack direction="row" justify={"space-between"}>
            <Center>
            <Button mr={1} colorScheme="teal" onClick={handlerAdition}>
              Salvar
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
            </Center>
          </Stack>  
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
