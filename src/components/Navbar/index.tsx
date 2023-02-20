import React from "react";
import {
  Button,
  HStack,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export function Navbar() {
  return (
    <HStack
      as="nav"
      bg="black"
      justify={"space-between"}
      padding={18}
      height="13%"
    >
      <Stack>
        <Text>Colocar a logo+circulo</Text>
      </Stack>

      <Stack direction="column">
        <Wrap spacing={4}>
          <WrapItem>
            <Link href="/">
              <Button colorScheme="red" borderRightRadius="10">
                Home
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/">
              <Button colorScheme="red" borderRightRadius="10">
                Contato
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/">
              <Button colorScheme="red" borderRightRadius="10">
                Funcionarios
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/">
              <Button colorScheme="red" borderRightRadius="10">
                Login
              </Button>
            </Link>
          </WrapItem>
        </Wrap>
      </Stack>
    </HStack>
  );
}
