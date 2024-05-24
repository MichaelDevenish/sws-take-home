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
    
    companyScore: CompanyScore
    companyPriceClose: CompanyPriceClose
    companyPriceCloses: [CompanyPriceClose]
  }

  type Query {
    listCompanies: [Company]
    getCompany (companyId: ID!): Company
  }
`;

export {
    typeDefs
}