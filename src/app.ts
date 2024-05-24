
import express from 'express'
import gql from "graphql-tag";
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from 'cors'
import {typeDefs, resolvers} from "./domains";

const app = express()

const server = new ApolloServer({ typeDefs, resolvers });

app.use(cors())
app.use(bodyParser.json())

async function startServer() {
    await server.start()
    app.use('/graphql', expressMiddleware(server))
}

startServer();

export {
    app
}
