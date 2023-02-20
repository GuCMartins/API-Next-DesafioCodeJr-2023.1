import { SearchIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  Stack,
  Link,
  Wrap,
  WrapItem,
  Text,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

interface CardUserProps {
  name: string;
  email: string;
  niver: string;
  cargo: string;
  salario: number;
}

export function CardUser({
  name,
  email,
  niver,
  cargo,
  salario,
}: CardUserProps) {
  return (
    <Card 
      p={8}
    >
      <Stack direction="column">
        <Wrap spacing={6}>
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
          <WrapItem>
            <Text>${salario}</Text>
          </WrapItem>
          <WrapItem>
            <Stack 
              direction="column" 
              justify={'space-between'}
            >
              <Link href='/'>
                  <IconButton aria-label='Visualizar' icon={<SearchIcon />} />
              </Link> 
              <Link href='/'>
                  <IconButton aria-label='Editar' icon={<EditIcon />} />
              </Link>
              <Link href='/'>
                  <IconButton aria-label='Deletar' icon={<DeleteIcon />} />
              </Link>   
            </Stack>
          </WrapItem>
        </Wrap>
      </Stack>
    </Card>
  );
}
