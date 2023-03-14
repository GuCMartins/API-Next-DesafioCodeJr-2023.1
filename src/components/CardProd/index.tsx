import {
  Card,
  Text,
  CardBody,
  CardFooter,
  Button,
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
  price: number;
  image: string;
}

export function CardProd({ name, text, price, image }: CardProdProps) {
  return (
    <Card maxW={"20%"} maxH={"25%"} bg={"#8A1B1B"} color="white" margin={"1%"}>
      <CardBody>
        <Center width={"150"} height={"150"}>
          <NextImage src={image} alt={text} width={"150"} height={"150"} />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{text}</Text>
          <Text color="white" fontSize="xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          //   variantColor="teal"
          variant="outline"
          type="submit"
          width="full"
          mt={4}
        >
          Adicionar a Compra
        </Button>
      </CardFooter>
    </Card>
  );
}
