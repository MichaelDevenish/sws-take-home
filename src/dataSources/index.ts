import {Company} from "./company";
import {prisma} from "../database";


const dataSources = () => {
    return {
        company: new Company(prisma),
    };
}

export {
    dataSources
}