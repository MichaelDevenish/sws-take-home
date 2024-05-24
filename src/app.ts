
import express from 'express'
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from 'cors'
import {typeDefs, resolvers} from "./resolvers";
import {dataSources} from "./dataSources";

const app = express()

const server = new ApolloServer({ typeDefs, resolvers });

app.use(cors())
app.use(bodyParser.json())

async function startServer() {
    await server.start()
    app.use('/graphql', expressMiddleware(server, {
        context: async () => ({
            dataSources: dataSources()
        })
    }))
}

startServer();

export {
    app
}
