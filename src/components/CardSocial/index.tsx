import {
  Card,
  Text,
  CardBody,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";

interface CardSocialProps {
  text: string;
  image: string;
  rede: string;
}

export function CardSocial({ text, image,rede }: CardSocialProps) {
  return (
    <Card maxW="sm" bg={"#8A1B1B"} color="white">
        <CardBody>
        <Link href={rede}>
          {/* <Image
          src='/{image}'
          alt='Green double couch with wooden legs'
          borderRadius={'10px'}
        /> */}
        </Link>
        <Stack mt="6" spacing="3">
          <Heading size="md">@fightOn</Heading>
          <Text>{text}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
