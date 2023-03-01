import {
  Card,
  Text,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

interface CardProdProps {
  name: string;
  text: string;
  preco: number;
  image: string;
}

export function CardProd({ name, text, preco, image }: CardProdProps) {
  return (
    <Card maxW={"20%"} maxH={"25%"} bg={"#8A1B1B"} color="white" margin={"1%"}>
      <CardBody>
        <Center width={"150"} height={"150"}>
          <NextImage
            src={image}
            alt={text}
            width={"150"}
            height={"150"}
          />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{text}</Text>
          <Text color="white" fontSize="2xl">
            ${preco}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="ghost" colorScheme="white">
          Adicione ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
