import {
    Card,
    Text,
    CardBody,
    CardFooter,
    Button,
    ButtonGroup,
    Divider,
    Heading,
    Stack,
  } from "@chakra-ui/react";
  import React from "react";
  
  interface CardProdProps {
    title: string;
    text: string;
    image: string;
  }
  
  export function CardProd({ title, text, image }: CardProdProps) {
    return (
      <Card maxW="sm" bg='red.700' color='white'>
        <CardBody>
          {/* <Image
        src='/{image}'
        alt='Green double couch with wooden legs'
        borderRadius={'10px'}
      /> */}
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{text}</Text>
            <Text color="white" fontSize="2xl">
                {text}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    );
  }
  