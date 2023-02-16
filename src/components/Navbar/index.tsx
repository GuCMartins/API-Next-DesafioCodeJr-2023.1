import React from 'react'
import { Button, HStack, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'

export function Navbar() {
    return (
        <HStack
            as="nav"
            bg='black'
        >
            <Stack>
                <Text>
                    Colocar a logo+circulo
                </Text>

            </Stack>

            <Stack direction='column'>
                <Wrap spacing={4}>
                    <WrapItem>
                        <Button colorScheme='red'>Home</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='red'>Contato</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='red'>Funcionarios</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button colorScheme='red'>Login</Button>
                    </WrapItem>
                </Wrap>
            </Stack>
        </HStack>
    )
}