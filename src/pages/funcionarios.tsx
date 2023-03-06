import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {CardUserFront} from '../components/CardUserFront'
import { useState } from "react";
import { useEffect } from "react";



export default function funcionarios() {
    const [funcionarios, setFuncionarios] = useState([])
    useEffect(() => {
        fetch('..api.json')
          .then(response => response.json())
          .then(data => setFuncionarios(data))
          .catch(error => console.log(error));
      }, []);


    return (
        <Stack>
            <Navbar /> 
            <Stack>
                {funcionarios && funcionarios.map(user => () => 
                <CardUserFront name={user.name} email={user.email} niver={user.niver} cargo={user.cargo} image={user.image}/>
                )}
            </Stack>
            <Footer/> 
        </Stack> 
    )
}