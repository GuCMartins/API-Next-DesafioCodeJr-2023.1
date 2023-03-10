import {
  VStack,
  Stack,
  Center,
  Divider,
  Text,
  Grid,
  GridItem,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CardUserBack } from "../components/CardUserBack";

import axios from "axios";
import ModalAdicao from "../components/ModalAdicao";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/funcionarios")
      .then((resposta) => {
        setFuncionarios(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <Stack>
      <Center>
        <VStack width={"70%"}>
          <Link href="/">
            <Button colorScheme="red" borderRightRadius="10">
              Sair
            </Button>
          </Link>
          <ModalAdicao />
          <Grid templateColumns="repeat(6, 1fr)" gap={5}>
            <GridItem w="100%" h="10" area={"ID"}>
              ID
            </GridItem>
            <GridItem w="100%" h="10" area={"Nome"}>
              Nome
            </GridItem>
            <GridItem w="100%" h="10" area={"E-mail"}>
              E-mail
            </GridItem>
            <GridItem w="100%" h="10" area={"Aniversario"}>
              Aniversário
            </GridItem>
            <GridItem w="100%" h="10" area={"salario"}>
              Salario
            </GridItem>
            <GridItem w="100%" h="10" area={"Cargo"}>
              Cargo
            </GridItem>
          </Grid>
          <Divider orientation="horizontal" />
          {funcionarios &&
            funcionarios.map((funcionario) => (
              <CardUserBack
                key={funcionario.id}
                name={funcionario.name}
                email={funcionario.email}
                aniversario={funcionario.aniversario}
                cargo={funcionario.cargo}
                salario={funcionario.salario}
                id={funcionario.id}
              />
            ))}
        </VStack>
      </Center>
    </Stack>
  );
}
