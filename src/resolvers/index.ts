import {companyResolvers, companyTypeDefs } from "./company"
import {companyScoreTypeDefs } from "./companyScore"
import {companyPriceCloseTypeDefs } from "./companyPriceClose"


const typeDefs = [
    companyTypeDefs,
    companyScoreTypeDefs,
    companyPriceCloseTypeDefs,
]

const resolvers = [
    companyResolvers,
]

export {
    typeDefs,
    resolvers
}
