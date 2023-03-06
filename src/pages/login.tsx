import { Stack, Center } from "@chakra-ui/react";
import React from "react";
import { FormLogin } from "../components/FormLogin";



export default function Home() {
    return (
        <Stack>
            <Center position='relative'>
                <FormLogin />
            </Center>
        </Stack> 
    )
}