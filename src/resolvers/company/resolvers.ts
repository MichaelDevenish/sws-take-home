import {Context} from "../../types";

type Company = {
    id: string
    name: string
    tickerSymbol?: string
    exchangeSymbol?: string
    uniqueSymbol?: string
    dateGenerated?: string
    securityName?: string
    exchangeCountryIso?: string
    listingCurrencyIso?: string
    canonicalUrl?: string
    uniqueSymbolSlug?: string
    scoreId?: number
}

const resolvers = {
    Query: {
        listCompanies: (_parent: void, _args: void, context: Context) => {
            return context.dataSources.company.getCompanies()
        },
        getCompany: (_parent: void, args: { companyId: string }, context: Context) => {
            return context.dataSources.company.getCompany(args.companyId)
        },
    },
    Company: {
        companyScore: (parent: Company, _args: void, context: Context) => {
            return context.dataSources.company.getCompanyScore(parent.id)
        },
        companyPriceClose: (parent: Company, _args: void, context: Context) => {
            return context.dataSources.company.getCompanyPriceClose(parent.id)
        },
        companyPriceCloses: (parent: Company, _args: void, context: Context) => {
            return context.dataSources.company.companyPriceCloses(parent.id)
        }
    }
};

export {
    resolvers
}