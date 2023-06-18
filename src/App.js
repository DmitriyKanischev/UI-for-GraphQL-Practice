import React from 'react';
import Tabs from './components/Tabs/Tabs';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
  cache: new InMemoryCache()
})

function App() {
  	return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Tabs />
        </ThemeProvider>
      </ApolloProvider>
    );
}

export default App;
