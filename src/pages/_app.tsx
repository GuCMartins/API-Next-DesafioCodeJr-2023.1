import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'
import React from 'react'
import { Slider, SliderProps, Slide} from '../components/Slider'

export default function App({ Component, pageProps }: AppProps) {

    const settings: SliderProps = {
       spaceBetween: 50,
        slidesPerView: 2,
        navigation:true,
        pagination: {clickable:true}, 
    }

    return (
        <ChakraProvider resetCSS theme={theme}>
            <Navbar />
            <Slider settings={settings} >
                <Slide>
                    <h1>Slide 1</h1>
                </Slide>
                <Slide>
                    <h1>Slide 2</h1>
                </Slide>
                <Slide>
                    <h1>Slide 3</h1>
                </Slide>
            </Slider>
           <Footer/>
        </ChakraProvider>
    )
    //https://www.youtube.com/watch?v=xCVC09ZeGjc&list=PL8YNlUoOZkkY-Zj0uWwzlZj58dlBwQSlQ&index=4
    //https://www.youtube.com/watch?v=AksKa-4yluc&list=PL8YNlUoOZkkY-Zj0uWwzlZj58dlBwQSlQ&index=4
    //usar pra terminar o carrosel
}