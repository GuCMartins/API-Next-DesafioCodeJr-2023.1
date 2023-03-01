import {
  HStack,
  Stack,
  Wrap,
  WrapItem,
  Button,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import NextImage from "next/image";
import React from "react";

export function Footer() {
  return (
    <HStack
      as="footer"
      bg="black"
      padding={15}
      bottom="0"
      height={"20%"}
      direction={"column"}
    >{/* Adicionar o center no footer */}
      <Stack direction="row" width={"100%"} ml={12}>
        <Stack direction="row" width={"37%"}>
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

        <Stack width={"20%"} pl={"6%"}>
          <Link href="/instagram">
            <NextImage
              src={"/img/Logo.png"}
              alt={"FightOn"}
              width={"70"}
              height={"70"}
            />
          </Link>
        </Stack>

        <Stack direction="row" width={"40%"}>
          <Wrap spacing={10}>
            <WrapItem>
              <Link href="/instagram">
                <NextImage
                  src={"/img/InstaLogo.png"}
                  alt={"Instagram"}
                  width={"45"}
                  height={"45"}
                />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="/facebook">
                <NextImage
                  src={"/img/FaceLogo.png"}
                  alt={"Facebook"}
                  width={"45"}
                  height={"45"}
                />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="/linkedin">
                <NextImage
                  src={"/img/LinkedinLogo.png"}
                  alt={"Linkedin"}
                  width={"45"}
                  height={"45"}
                />
              </Link>
            </WrapItem>
            <WrapItem>
              <Stack bg={"#8A1B1B"} color="white" padding="2" ml={20} borderRadius={5} >
                <Heading size="md">Telefone:</Heading>

                <Text py="2">
                  (32) 9 9999-9999
                </Text>
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>
      </Stack>
      {/* <Divider orientation="horizontal" /> */}
    </HStack>
  );
}
