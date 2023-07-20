import { Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import * as React from 'react';

function Home() {

    return (
        <div>
            <Head>
                <title>React Scaffold</title>
                <meta name="description" content="Scaffold to start a project with javascript and React on the frontend" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Container display='flex' justifyContent='space-around' marginTop='16px' minWidth='600px'>
                    <Heading as='h1'>Hello React Scaffold</Heading>
                </Container>
            </main>
        </div>
    );
}

export default Home;