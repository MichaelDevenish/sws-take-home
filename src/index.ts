
import express from 'express'
import gql from "graphql-tag";
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express()

// todo setup base code structure
// todo setup prisma
const typeDefs = gql`
  type Query {
    test: String
  }
`;
const resolvers = {
    Query: {
        test() {
            return 'Hello world';
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

app.use(cors())
app.use(bodyParser.json())

async function startServer() {
    await server.start()
    app.use('/graphql', expressMiddleware(server))
}
startServer();


app.listen(3000, function () {
    console.log('graphql app listening on port 3000!');
});


