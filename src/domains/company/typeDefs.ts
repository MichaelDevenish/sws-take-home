import gql from "graphql-tag";

const typeDefs = gql`
  type Company {
    id: ID!
  }

  type Query {
    listCompanies: [Company]
  }
`;

export {
    typeDefs
}