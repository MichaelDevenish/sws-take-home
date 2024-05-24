import gql from "graphql-tag";

const typeDefs = gql`
  type Company {
    id: ID!
    name: String!
    tickerSymbol: String
    exchangeSymbol: String
    uniqueSymbol: String
    dateGenerated: String
    securityName: String
    exchangeCountryIso: String
    listingCurrencyIso: String
    canonicalUrl: String
    uniqueSymbolSlug: String
    scoreId: Int
  }

  type Query {
    listCompanies: [Company]
  }
`;

export {
    typeDefs
}