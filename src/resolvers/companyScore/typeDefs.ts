import gql from "graphql-tag";

const typeDefs = gql`
  type CompanyScore {
    id: ID!
    companyId: String!
    dateGenerated: String!
    future: Int!
    health: Int!
    management: Int!
    past: Int!
    value: Int!
    misc: Int!
    total: Int!
    sentence: String
  }
`;

export {
    typeDefs
}