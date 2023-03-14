import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import React, { FormEvent } from "react";
import NextImage from "next/image";

export function FormLogin() {
  return (
    <Flex
      width={"30%"}
      align="center"
      justifyContent="center"
      bg={"#8A1B1B"}
      borderRadius={10}
      mt="10%" /*Adicionar o fundo dos inputs */
    >
      <Box p={2}>
        <Box textAlign="center">
          <NextImage
            src={"/img/LogoVermelho.jpeg"}
            alt={"FightOn"}
            width={"200"}
            height={"200"}
          />
        </Box>
        <Box my={4} textAlign="left">
          <FormControl isRequired>
            <FormLabel>Insira aqui o seu E-mail:</FormLabel>
            <Input
              type="email"
              placeholder="email@fighton.com"
              size="lg"
              colorScheme="white"
            />
          </FormControl>
          <FormControl isRequired mt={6}>
            <FormLabel>Insira aqui a sua senha:</FormLabel>
            <Input
              type="text"
              placeholder="*******"
              size="lg"
              colorScheme="white"
            />
          </FormControl>
          <Link href="/gerenciamento">
            <Button
              bg={"white"}
              variant="outline"
              type="submit"
              width="full"
              mt={4}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
