import { VStack, Stack, Text } from "@chakra-ui/react";
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

    return (
        <Stack>
            <Navbar /> 
            <VStack>
                {users.map(user => () => 
                <CardUserFront name={user.name} email={user.email} aniversario={user.aniversario} cargo={user.cargo}/>
                )}
            </VStack>
            <Footer/> 
        </Stack> 
    )
}