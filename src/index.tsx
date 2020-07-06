import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import App from './components/App'
import client from './graphql'
import theme from './theme'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <CssBaseline />
                <App />
            </ApolloProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)