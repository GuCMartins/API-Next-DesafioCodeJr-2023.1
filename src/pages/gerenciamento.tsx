import {
  VStack,
  HStack,
  Stack,
  Center,
  Divider,
  Grid,
  GridItem,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CardUserBack } from "../components/CardUserBack";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

import axios from "axios";
import ModalAdicao from "../components/ModalAdicao";

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
      <Center>
        <VStack width={"80%"}>
          <HStack justify={"space-between"}>
            <Link href="/">
              <Button colorScheme="red" borderRightRadius="10">
                Sair
              </Button>
            </Link>
            <ModalAdicao />
          </HStack>
          <Grid
            fontWeight="bold"
            templateColumns="repeat(7, 1fr)"
            gap={"1%"}
            width={"100%"}
          >
            <GridItem w="100%" h="10" p={2}>
              <Center>Id</Center>
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
            <GridItem w="100%" h="10" p={2}>
              <Center>Salario</Center>
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
          <HStack>
            <Button onClick={() => setCurrentPage(currentPage - 1)}>
              <ArrowLeftIcon />
            </Button>
            {pageNumbers.map((number) => (
              <Button key={number} id={number}>
                {currentPage}
              </Button>
            ))}
            <Button onClick={() => setCurrentPage(currentPage + 1)}>
              <ArrowRightIcon />
            </Button>
          </HStack>
        </VStack>
      </Center>
    </Stack>
  );
}
