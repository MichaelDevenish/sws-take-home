"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_http_1 = require("graphql-http");
const graphql_1 = require("graphql");
// Construct a schema, using GraphQL schema language
const schema = (0, graphql_1.buildSchema)(`
  type Query {
    hello: String
  }
`);
// The root provides a resolver function for each API endpoint
const root = {
    hello() {
        return "Hello world!";
    },
};
const app = (0, express_1.default)();
// Create and use the GraphQL handler.
app.all("/graphql", (0, graphql_http_1.createHandler)({
    schema: schema,
    rootValue: root,
}));
// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
