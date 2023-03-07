import {
  Card,
  Stack,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import data from "../../utils/data";

interface CardUserFrontProps {
  name: string;
  email: string;
  aniversario: string;
  cargo: string;
  // image: string;
}

export function CardUserFront({ name, email, aniversario, cargo, /*image*/ }: CardUserFrontProps) {
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
            <Text>{name}</Text>
          </WrapItem>
          <WrapItem>
            <Text>{email}</Text>
          </WrapItem>
          <WrapItem>
            <Text>{aniversario}</Text>
          </WrapItem>
          <WrapItem>
            <Text>{cargo}</Text>
          </WrapItem>
        </Wrap>
      </Stack>
    </Card>
  );
}
