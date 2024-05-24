import gql from "graphql-tag";

const typeDefs = gql`
  type Campaign {
    id: ID!
  }

  type Query {
    listCampaigns: [Campaign]
  }
`;

export {
    typeDefs
}