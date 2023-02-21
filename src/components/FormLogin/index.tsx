import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React, { FormEvent } from "react";

export default function FormLogin() {
  return (
    <Flex width="full" align="center" justifyContent="center" bg={"#8A1B1B"}>
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Colocar aqui a imagem da logo com o circulo</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired>
              <FormLabel>Insira aqui o seu E-mail</FormLabel>
              <Input type="email" placeholder="email@fighton.com" size="lg" />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Insira aqui a sua senha</FormLabel>
              <Input type="password" placeholder="*******" size="lg" />
            </FormControl>
            <Button
              //   variantColor="teal"
              variant="outline"
              type="submit"
              width="full"
              mt={4}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
