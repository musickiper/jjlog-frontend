import ApolloClient from "apollo-boost";
import {defaults, resolvers} from "./LocalState";

export default new ApolloClient({
    uri: "https://jjlog-backend.herokuapp.com/",
    clientState: {
        defaults,
        resolvers
    }
});