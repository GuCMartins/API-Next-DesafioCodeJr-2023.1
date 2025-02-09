import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React, { FormEvent } from "react";

export function FormContato() {
  return (
    <Flex width={"50%"} align="center" justifyContent="center" bg={"#8A1B1B"} borderRadius={10} mb={10}>
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Fale Conosco</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <Stack direction="row" width={"100%"}>
              <FormControl isRequired>
                <FormLabel>Insira aqui seu nome:</FormLabel>
                <Input type="text" size="lg" bg="white"
                  color="black" />
              </FormControl>
              <FormControl isRequired mt={6}>
                <FormLabel>Insira aqui o seu email:</FormLabel>
                <Input type="email" size="lg" bg="white"
                  color="black" />
              </FormControl>
            </Stack>
            <FormControl isRequired mt={6}>
              <FormLabel>Insira aqui a mensagem a ser enviada:</FormLabel>
              <Input type="text" size="lg" bg="white"
                color="black" />
            </FormControl>
            <Button
              bg="black"
              _hover={{ backgroundColor: "red.600", color: "white" }}
              variant="outline"
              type="submit"
              width="full"
              mt={4}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
