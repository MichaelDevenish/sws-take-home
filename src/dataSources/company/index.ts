import {PrismaClient} from "@prisma/client";

export class Company {
    constructor(private _prisma: PrismaClient) {
    }

   public getCompanies () {
       return this._prisma.company.findMany({
           orderBy: {dateGenerated: {sort: 'desc'}}
       })
   }

    public getCompany (companyId: string) {
        return this._prisma.company.findUnique({
            where: { id: companyId }
        })
    }

    public getCompanyScore (companyId: string) {
       return this._prisma.company
           .findUnique({where: { id: companyId }})
           .companyScore()
   }

    public async getCompanyPriceClose (companyId: string) {
        /**
         *  this is more efficient than calling prisma.companyPriceClose find first where company_id because
         *  prisma will batch load all companies in the list many instead of doing an individual
         *  query per call of this function. Therefore, solving the graphql n+1 problem.
         *  https://www.prisma.io/docs/orm/prisma-client/queries/query-optimization-performance
         */
        const firstPriceCloseArray = await this._prisma.company
            .findUnique({where: { id: companyId }})
            .companyPriceClose({
                orderBy: { date: 'desc' },
                take: 1
            })

        return firstPriceCloseArray?.[0]
    }

    public companyPriceCloses (companyId: string) {
        return this._prisma.company
            .findUnique({where: { id: companyId }})
            .companyPriceClose({orderBy: { date: 'desc' }})
    }
}