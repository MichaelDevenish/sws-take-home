import gql from "graphql-tag";

const typeDefs = gql`
  type CompanyPriceClose {
    date: String!
    companyId: String!
    price: Float!
    dateCreated: String!
  }
`;

export {
    typeDefs
}