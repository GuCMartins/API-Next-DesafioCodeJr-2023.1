import React from "react";
import {
  Button,
  HStack,
  Link,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import NextImage from "next/image";

export function Navbar() {
  return (
    <HStack
      as="nav"
      bg="black"
      justify={"space-between"}
      pl={50}
      pr={50}
      pt={5}
      pb={5}
      height="13%"
    >
      <Stack>
      <NextImage
              src={"/img/Logo.png"}
              alt={"FightOn"}
              width={"70"}
              height={"70"}
            />
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
            <Link href="/contato">
              <Button colorScheme="red" borderRightRadius="10">
                Contato
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/funcionarios">
              <Button colorScheme="red" borderRightRadius="10">
                Funcionarios
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/login">
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
