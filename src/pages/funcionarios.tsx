import { VStack, Stack, Center, Divider, Text, Grid, GridItem } from "@chakra-ui/react";
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
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h="10" area={'foto'}>
                Foto
            </GridItem>
            <GridItem w="100%" h="10" area={'Nome'}>
                Nome
            </GridItem>
            <GridItem w="100%" h="10" area={'E-mail'}>
                E-mail
            </GridItem>
            <GridItem w="100%" h="10" area={'Aniversario'}>
                Aniversário
            </GridItem>
            <GridItem w="100%" h="10" area={'Cargo'}>
                Cargo
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
