import {
  Card,
  Stack,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

interface CardUserFrontProps {
  name: string;
  email: string;
  niver: string;
  cargo: string;
  image: string;
}

export function CardUserFront({ name, email, niver, cargo, image }: CardUserFrontProps) {
  return (
    <Card
      m={"2%"}
      p={"2%"}
      direction="row"
      overflow="hidden"
      variant="outline"
      bg={"#8A1B1B"}
    >

      <Stack direction="row">
        <Wrap align='center' spacing={"8%"} /*Arrumar o tamanho do espaco para distribuir os dados*/>
          <WrapItem> 
            <NextImage
              src={image}
              alt={"FightOn"}
              width={"70"}
              height={"70"}
            />
          </WrapItem>     
          <WrapItem>
            <Text>{name}</Text>
          </WrapItem>
          <WrapItem>
            <Text>{email}</Text>
          </WrapItem>
          <WrapItem>
            <Text>{niver}</Text>
          </WrapItem>
          <WrapItem>
            <Text>{cargo}</Text>
          </WrapItem>
        </Wrap>
      </Stack>
    </Card>
  );
}
