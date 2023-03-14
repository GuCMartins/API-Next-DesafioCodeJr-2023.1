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
import { AiFillEdit } from "react-icons/ai";
import { useRouter } from 'next/router';

export default function ModalEdicao({ idfuncionario }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false)
  const finalRef = React.useRef(null);

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    salario: "",
    aniversario: "",
    cargo: "",
  });

  const handlerSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/funcionarios/${idfuncionario}`, {
        name: formValues.name,
        email: formValues.email,
        salario: formValues.salario,
        aniversario: formValues.aniversario,
        cargo: formValues.cargo,
      })
      .catch((erro) => {
        console.log(erro);
      });
      setIsOpen(false);
      router.reload();
  };

  const fetchData = (event) => {
      event.preventDefault();
      axios.get(`http://localhost:3001/funcionarios/${idfuncionario}`).then((response) => {
        setFormValues(response.data);
        setIsOpen(true);
    });
  }

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
      <Button m={1} bg="green" onClick={fetchData}>
        <AiFillEdit />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="nome">Nome:</FormLabel>
              <Input
                id="nome"
                value={formValues.name}
                onChange={(event) =>
                  setFormValues({ ...formValues, name: event.target.value })
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
                // type="date"
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
            <FormControl>
              <FormLabel htmlFor="salario">salario:</FormLabel>
              <Input
                id="salario"
                placeholder="Digite seu salario"
                value={formValues.salario}
                type="number"
                onChange={(event) =>
                  setFormValues({ ...formValues, salario: event.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
          <Stack direction="row" justify={"space-between"}>
            <Center>
              <Button colorScheme="teal" mr={1} onClick={handlerSubmit}>
                Salvar
              </Button>
              <Button colorScheme="blue" onClick={() => setIsOpen(false)}>
                Fechar
              </Button>
            </Center>
          </Stack>  
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
