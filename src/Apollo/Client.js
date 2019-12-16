import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
