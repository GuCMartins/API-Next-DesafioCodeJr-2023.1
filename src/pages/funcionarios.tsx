import {
  VStack,
  Stack,
  Center,
  Divider,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { CardUserFront } from "../components/CardUserFront";

import axios from "axios";

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
      <Navbar />
      <Center>
        <VStack width={"50%"}>
          <Grid fontWeight='bold' templateColumns="repeat(5, 1fr)" gap={"1%"} width={"100%"}>
            <GridItem w="100%" h="10" p={2} >
              <Center>Foto</Center>
            </GridItem>
            <GridItem w="100%" h="10" p={2}>
              <Center>Nome</Center>
            </GridItem>
            <GridItem w="100%" h="10" p={2}>
              <Center>Email</Center>
            </GridItem>
            <GridItem w="100%" h="10" p={2}>
              <Center>Aniversario</Center>
            </GridItem>
            <GridItem w="100%" h="10" p={2}>
              <Center>Cargo</Center>
            </GridItem>
          </Grid>
          <Divider orientation="horizontal" />
          {funcionarios &&
            funcionarios.map((funcionario) => (
              <CardUserFront
                key={funcionario.id}
                name={funcionario.name}
                email={funcionario.email}
                aniversario={funcionario.aniversario}
                cargo={funcionario.cargo}
                id={funcionario.id}
              />
            ))}
        </VStack>
      </Center>
      <Footer />
    </Stack>
  );
}
