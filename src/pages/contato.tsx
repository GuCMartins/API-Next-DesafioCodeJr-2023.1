import { Flex, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { FormContato } from "../components/FormContato";
import {CardSocial} from '../components/CardSocial'
import {Map} from '../components/Map'



export default function Contato() {
    return (
        <Stack
            as="main"
        >
            <Navbar />
            <VStack >
                <FormContato/>
                <Flex direction={{ base:'column', lg:'row' }}//arrumar as distancias
                    as="section"
                    align={'center'}
                    justify={'center'}
                    width={'100%'}
                    mt={10}
                >
                    <CardSocial text={"Lorem ipsum dolor sit amet."} image={"/img/InstaLogo.png"} rede={"/instagram"}/>
                    <CardSocial text={"Lorem ipsum dolor sit amet."} image={"/img/FaceLogo.png"} rede={"/facebook"}/>
                    <CardSocial text={"Lorem ipsum dolor sit amet."} image={"/img/LinkedinLogo.png"} rede={"/linkedin"}/>
                </Flex>
                <Map/>
            </VStack>
            <Footer/>
        </Stack>
    )
}