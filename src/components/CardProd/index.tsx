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
} from "@chakra-ui/react";
import React from "react";

interface CardProdProps {
  name: string;
  text: string;
  preco: number;
  image: string;
}

export function CardProd({ name, text, preco, image }: CardProdProps) {
  return (
    <Card maxW="sm" bg={"#8A1B1B"} color="white">
      <CardBody>
        {/* <Image
      src='/{image}'
      alt='Green double couch with wooden legs'
      borderRadius={'10px'}
    /> */}
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
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="white">
            Compre Agora
          </Button>
          <Button variant="ghost" colorScheme="white">
            Adicione ao carrinho
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
