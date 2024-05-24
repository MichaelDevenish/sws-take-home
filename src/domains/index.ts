import {companyResolvers, companyTypeDefs } from "./company"


const typeDefs = [
    companyTypeDefs
]

const resolvers = [
    companyResolvers
]

export {
    typeDefs,
    resolvers
}
