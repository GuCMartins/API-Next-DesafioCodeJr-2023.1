import {
  VStack,
  Stack,
  Center,
  Divider,
  Text,
  Grid,
  GridItem,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { CardUserFront } from "../components/CardUserFront";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

import axios from "axios";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(11);

  useEffect(() => {
    axios
      .get("http://localhost:3001/funcionarios", {
        params: {
          _page: currentPage,
          _limit: perPage,
        },
      })
      .then((resposta) => {
        setFuncionarios(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [currentPage, perPage]);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(funcionarios.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack>
      <Navbar />
      <Center>
        <VStack width={"60%"}>
          <Grid
            fontWeight="bold"
            templateColumns="repeat(5, 1fr)"
            gap={1}
            width={"100%"}
          >
            <GridItem w="100%" h="10" p={2}>
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
          <HStack>
          <Button bg="black" onClick={() => setCurrentPage(currentPage - 1)}>
              <ArrowLeftIcon />
            </Button >
            {pageNumbers.map((number) => (
              <Button bg="black" key={number} id={number}>
                {currentPage}
              </Button>
            ))}
            <Button bg="black" onClick={() => setCurrentPage(currentPage + 1)}>
              <ArrowRightIcon />
            </Button>
          </HStack>
        </VStack>
      </Center>
      <Footer />
    </Stack>
  );
}
