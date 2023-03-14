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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function ModalVisual({ idfuncionario }) {
  const [isOpen, setIsOpen] = useState(false)
  const finalRef = React.useRef(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    salario: "",
    aniversario: "",
    cargo: "",
  });

  const fetchData = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3001/funcionarios/${idfuncionario}`).then((response) => {
      setData(response.data);
      setIsOpen(true);
  });
}
  return (
    <>
      <Button bg="blue" m={1}  onClick={fetchData}>
        <InfoOutlineIcon />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Visualização</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="nome">Nome:</FormLabel>
              <Textarea
                value={data.name}
                size='sm'
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="E-mail">E-mail:</FormLabel>
              <Textarea
                value={data.email}
                size='sm'
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="salario">Salario:</FormLabel>
              <Textarea
                value={data.salario}
                size='sm'
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="aniversario">Aniversario:</FormLabel>
              <Textarea
                value={data.aniversario}
                size='sm'
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cargo">Cargo:</FormLabel>
              <Textarea
                value={data.cargo}
                size='sm'
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
