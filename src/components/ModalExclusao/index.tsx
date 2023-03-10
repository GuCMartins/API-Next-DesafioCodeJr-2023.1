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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteIcon } from "@chakra-ui/icons";

export default function ModalExclusao({ idfuncionario }) {
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
    axios.delete(`http://localhost:3001/funcionarios/${idfuncionario}`);
  };

  return (
    <>
      <Button m={1} onClick={onOpen}>
        <DeleteIcon />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmação de Exclusao</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              value={"Realmente deseja excluir este funcionario?"}
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" justify={"space-between"}>
              <Center>
                <Button m={1} colorScheme="red" onClick={handlerSubmit}>
                  Deletar
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
