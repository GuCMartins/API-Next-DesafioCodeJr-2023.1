import {
  Card,
  Flex,
  Grid,
  GridItem,
  Center
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

interface CardUserFrontProps {
  name: string;
  email: string;
  aniversario: string;
  cargo: string;
  id: number;
}

export function CardUserFront({
  name,
  email,
  aniversario,
  cargo,
  id,
}: CardUserFrontProps) {
  return (
    <Card
      m={"2%"}
      p={"2%"}
      pl={"9%"}
      pr={"2%"}
      direction="row"
      overflow="hidden"
      variant="outline"
      bg={"#8A1B1B"}
      width={"100%"}
    >
      <Flex direction="row">
        <Grid templateColumns="repeat(5, 1fr)" gap={"1%"}>
            <GridItem w="100%" h="10" pr={20}>
              <Center><NextImage src={"/img/user.jpg"} alt={name} width={"45"} height={"45"} /></Center>
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
          </Grid>
      </Flex>
    </Card>
  );
}
