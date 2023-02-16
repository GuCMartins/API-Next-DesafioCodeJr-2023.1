import {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'
import { Header } from '../components/Head'

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head>
                <Header/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )    
}