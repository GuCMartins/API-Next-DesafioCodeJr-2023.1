import {
  HStack,
  Stack,
  Wrap,
  WrapItem,
  Button,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <HStack
      as="nav"
      bg="black"
      justify={"space-between"}
      padding={15}
      height="17%"
    >
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

      <Stack>
        <Text>Colocar a logo+circulo</Text>
      </Stack>

      <Stack direction="column">
        <Wrap spacing={3}>
          <WrapItem>
            <Link href="/instagram">
              <Image src=""></Image>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/facebook">
              <Image src=""></Image>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href="/linkedin">
              <Image src=""></Image>
            </Link>
          </WrapItem>
        </Wrap>
      </Stack>
      <Divider orientation='horizontal' />  
    </HStack>
  );
}
