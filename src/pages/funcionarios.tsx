import { HStack,VStack, Stack, Center,Divider,Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {CardUserFront} from '../components/CardUserFront'
// import { useState } from "react";
// import { useEffect } from "react";

import data from '../utils/data'

export default function Funcionarios() {
    // const [funcionarios, setFuncionarios] = useState([])
    // useEffect(() => {
    //     fetch('..api.json')
    //       .then(response => response.json())
    //       .then(data => setFuncionarios(data))
    //       .catch(error => console.log(error));
    //   }, []);

    const users = data.usuarios

    console.log(users)

    return (
        <Stack>
            <Navbar /> 
            <Center>
                <VStack width={"50%"}>
                    <HStack spacing={40}>
                        <Text fontSize="xl" fontWeight="bold" color={"black"}> Nome </Text>
                        <Text fontSize="xl" fontWeight="bold" color={"black"}> Email </Text>
                        <Text fontSize="xl" fontWeight="bold" color={"black"}> Aniversário</Text>
                        <Text fontSize="xl" fontWeight="bold" color={"black"}>  Cargo</Text>
                    </HStack>
                    <Divider orientation='horizontal' />
                    {users.map(user => (
                        <CardUserFront name={user.name} email={user.email} aniversario={user.aniversario} cargo={user.cargo}/>
                    ))}
                </VStack>
            </Center>
            <Footer/> 
        </Stack> 
    )
}