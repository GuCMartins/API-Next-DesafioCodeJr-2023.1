import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'
import React from 'react'

export default function App({ Component, pageProps }) {

    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}