import {prisma} from "../../database";

const resolvers = {
    Query: {
        listCompanies: async () => {
            return prisma.company.findMany({
                orderBy: {dateGenerated: {sort: 'desc'}}
            })
        },
    },
};

export {
    resolvers
}