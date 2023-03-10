import { SearchIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  Stack,
  Link,
  Wrap,
  WrapItem,
  Text,
  IconButton,
  Grid,
  GridItem,
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
    <Card p={8} bg={"#D9D9D9"} m={"5%"}>
      <Stack direction="column">
        <Grid templateColumns="repeat(7, 1fr)" gap={5}>
          <GridItem w="100%" h="10" area={"ID"}>
            {id}
          </GridItem>
          <GridItem w="100%" h="10" area={"Nome"}>
            {name}
          </GridItem>
          <GridItem w="100%" h="10" area={"E-mail"}>
            {email}
          </GridItem>
          <GridItem w="100%" h="10" area={"Aniversario"}>
            {aniversario}
          </GridItem>
          <GridItem w="100%" h="10" area={"salario"}>
            {salario}
          </GridItem>
          <GridItem w="100%" h="10" area={"Cargo"}>
            {cargo}
          </GridItem>
        </Grid>
        <Stack direction="row" justify={"space-between"}>
          <ModalVisual idfuncionario={id} />
          <ModalEdicao idfuncionario={id} />
          <ModalExclusao idfuncionario={id} />
        </Stack>
      </Stack>
    </Card>
  );
}
