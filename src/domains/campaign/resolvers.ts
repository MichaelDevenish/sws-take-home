import {prisma} from "../../database";

const resolvers = {
    Query: {
        listCampaigns: async () => {
            console.log( await prisma.company.findMany())
            return [
                {id: 'test'}
            ];
        },
    },
};

export {
    resolvers
}