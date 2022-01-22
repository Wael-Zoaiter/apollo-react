import {
  ApolloProvider,
} from "@apollo/client";

import apolloClient from "./config/apollo";
import Home from "./pages/Home";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
