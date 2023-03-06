import { Center, Stack } from "@chakra-ui/react";
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
            <Stack >
                <FormContato/>
                <Stack direction={['column', 'row']}//arrumar as distancias e centralizar essa merda
                    as="section"
                    align={'center'}
                >
                    <CardSocial text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} image={"/img/InstaLogo.png"} rede={"/instagram"}/>
                    <CardSocial text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} image={"/img/FaceLogo.png"} rede={"/facebook"}/>
                    <CardSocial text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} image={"/img/LinkedinLogo.png"} rede={"/linkedin"}/>
                </Stack>
                <Map/>
            </Stack>
            <Footer/>
        </Stack>
    )
}