import {
  Card,
  Flex,
  Grid,
  GridItem,
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
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%" h="10" area={"foto"}>
            <NextImage src={"/img/user.jpg"} alt={name} width={"80"} height={"80"} />
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
          <GridItem w="100%" h="10" area={"Cargo"}>
            {cargo}
          </GridItem>
        </Grid>
      </Flex>
    </Card>
  );
}
