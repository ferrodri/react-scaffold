import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components';
import { ReactQuery } from '../contexts';
import { globalCSS } from '../styles/globalCSS';

const theme = extendTheme(globalCSS);

function App({ Component, pageProps }) {
    return (
        <ReactQuery>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider >
        </ReactQuery>
    );
}

export default App;