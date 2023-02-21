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

export default function FormContato() {
  return (
    <Flex width="full" align="center" justifyContent="center" bg={"#8A1B1B"}>
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Fale Conosco</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <Stack direction="column">
              <FormControl isRequired>
                <FormLabel>Nome:</FormLabel>
                <Input type="name" size="lg" />
              </FormControl>
              <FormControl isRequired mt={6}>
                <FormLabel>E-mail do remetente</FormLabel>
                <Input type="password" placeholder="*******" size="lg" />
              </FormControl>
            </Stack>
            <FormControl isRequired>
              <FormLabel>Mensagem a ser enviada</FormLabel>
              <Input type="text" placeholder="email@fighton.com" size="lg" />
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
