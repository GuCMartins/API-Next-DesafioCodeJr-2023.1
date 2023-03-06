import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";



export default function Home() {
    return (
        <Stack>
            <Navbar /> 
            
            <Footer/> 
        </Stack> 
    )
}