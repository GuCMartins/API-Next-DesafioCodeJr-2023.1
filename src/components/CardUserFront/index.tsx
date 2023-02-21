import {
  Card,
  Stack,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface CardUserProps {
  name: string;
  email: string;
  niver: string;
  cargo: string;
  image: string;
}

export function CardUser({ name, email, niver, cargo, image }: CardUserProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      bg={"#8A1B1B"}
    >

      <Stack direction="column" >
        <Wrap spacing={"8%"}>
          {/*
          <WrapItem> 
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
              />
          </WrapItem>     
          */}
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
