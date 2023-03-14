import {
  Card,
  Stack,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import React from "react";
import ModalEdicao from "../ModalEdicao";
import ModalExclusao from "../ModalExclusao";
import ModalVisual from "./../ModalVisual/index";

interface CardUserBackProps {
  name: string;
  email: string;
  aniversario: string;
  cargo: string;
  salario: number;
  id: number;
}

export function CardUserBack({
  name,
  email,
  aniversario,
  cargo,
  salario,
  id,
}: CardUserBackProps) {
  return (
    <Card p={8} bg={"#8A1B1B"} m={"5%"}>
      <Stack direction="column" color="white">
        <Grid templateColumns="repeat(7, 1fr)" gap={5}>
          <GridItem w="100%" h="10" pr={10}>
            <Center>{id}</Center>
          </GridItem>
          <GridItem w="100%" h="10" pr={10}>
            <Center>{name}</Center>
          </GridItem>
          <GridItem w="100%" h="10" pr={5}>
            <Center>{email}</Center>
          </GridItem>
          <GridItem w="100%" h="10" pr={10}>
            <Center>{aniversario}</Center>
          </GridItem>
          <GridItem w="100%" h="10">
            <Center>{cargo}</Center>
          </GridItem>
          <GridItem w="100%" h="10" pr={10}>
            <Center>R$ {salario}</Center>
          </GridItem>
          <GridItem>
          <Stack direction="row" justify={"space-between"}>
            <Center>
              <ModalVisual idfuncionario={id} />
              <ModalEdicao idfuncionario={id} />
              <ModalExclusao idfuncionario={id} />
            </Center>  
          </Stack>
        </GridItem>
        </Grid>
      </Stack>
    </Card>
  );
}
