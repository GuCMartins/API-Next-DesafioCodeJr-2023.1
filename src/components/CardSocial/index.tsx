import {
  Card,
  Text,
  CardBody,
  Heading,
  Stack,
  Link,
  Center,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

interface CardSocialProps {
  text: string;
  image: string;
  rede: string;
}

export function CardSocial({ text, image,rede }: CardSocialProps) {
  return (
    <Card maxW={"15%"} bg={"#8A1B1B"} color="white">
        <CardBody>
        <Link href={rede}>
        <Center width={"90"} height={"90"}>
          <NextImage
            src={image}
            alt={text}
            width={"80"}
            height={"80"}
          />
        </Center>
        </Link>
        <Center width={"100"} height={"100"}>
          <Stack spacing="3">
            <Heading pl={"12%"} size="md">@fightOn</Heading>
            <Text>{text}</Text>
          </Stack>
        </Center>
      </CardBody>
    </Card>
  );
}
