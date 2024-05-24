
import {Company} from "./index";
import {Prisma, PrismaClient, CompanyScore, CompanyPriceClose} from "@prisma/client";
import { mockDeep, mockReset } from "jest-mock-extended";

const prismaMock = mockDeep<PrismaClient>();

const mockCompanies = [
    {
        id: 'test1',
        name: "test1",
        tickerSymbol: null,
        exchangeSymbol: null,
        uniqueSymbol: null,
        dateGenerated: null,
        securityName: null,
        exchangeCountryIso: null,
        listingCurrencyIso: null,
        canonicalUrl: null,
        uniqueSymbolSlug: null,
        scoreId: null
    },
    {
        id: 'test2',
        name: "test2",
        tickerSymbol: null,
        exchangeSymbol: null,
        uniqueSymbol: null,
        dateGenerated: null,
        securityName: null,
        exchangeCountryIso: null,
        listingCurrencyIso: null,
        canonicalUrl: null,
        uniqueSymbolSlug: null,
        scoreId: null
    }
]

describe("Test the company datasource", () => {
    beforeEach(() => {
        mockReset(prismaMock)
    })
    test("It should list companies", async () => {
        const company = new Company(prismaMock)

        prismaMock.company.findMany.mockResolvedValue(mockCompanies)
        expect(await company.getCompanies()).toMatchSnapshot()
    });

    test("It should get a company", async () => {
        const company = new Company(prismaMock)
        const companyId = 'test1'


        const companyScore = {
            id: 1,
            name: 'John Smith'
        } as unknown as Prisma.Prisma__CompanyScoreClient<CompanyScore>;

        prismaMock.company.findUnique.mockResolvedValue(mockCompanies[0])

        expect(await company.getCompany(companyId)).toMatchSnapshot()
        expect(prismaMock.company.findUnique).toHaveBeenCalledWith({where: { id: companyId }})
    });

    test("It should get a company score", async () => {
        const company = new Company(prismaMock)
        const companyId = 'test1'

        prismaMock.company.findUnique.mockReturnValue({
            companyScore: (): CompanyScore => (
                {
                    companyId: "test1",
                    dateGenerated: '',
                    id: 0,
                    dividend: 0,
                    future: 0,
                    health: 0,
                    management: 0,
                    past: 0,
                    value: 0,
                    misc: 0,
                    total: 0,
                    sentence: null
                }
            )
        } as any)

        expect(await company.getCompanyScore(companyId)).toMatchSnapshot()
        expect(prismaMock.company.findUnique).toHaveBeenCalledWith({where: { id: companyId }})
    });

    test("It should get the most recent company close price", async () => {
        const company = new Company(prismaMock)
        const companyId = 'test1'

        const companyPriceClose = jest.fn()

        companyPriceClose.mockReturnValue( [{
            date: "",
            companyId: "",
            price: 0,
            dateCreated: ""
        }])

        prismaMock.company.findUnique.mockReturnValue({
            companyPriceClose
        } as any)

        expect(await company.getCompanyPriceClose(companyId)).toMatchSnapshot()
        expect(prismaMock.company.findUnique).toHaveBeenCalledWith({where: { id: companyId }})
        expect(companyPriceClose).toHaveBeenCalledWith({
            orderBy: { date: 'desc' },
            take: 1
        })

    });

    test("It should get the all company close prices", async () => {
        const company = new Company(prismaMock)
        const companyId = 'test1'

        const companyPriceClose = jest.fn()

        companyPriceClose.mockReturnValue( [{
            date: "",
            companyId: "",
            price: 0,
            dateCreated: ""
        }, {
            date: "",
            companyId: "",
            price: 0,
            dateCreated: ""
        }])

        prismaMock.company.findUnique.mockReturnValue({
            companyPriceClose
        } as any)

        expect(await company.companyPriceCloses(companyId)).toMatchSnapshot()
        expect(prismaMock.company.findUnique).toHaveBeenCalledWith({where: { id: companyId }})
        expect(companyPriceClose).toHaveBeenCalledWith({
            orderBy: { date: 'desc' },
        })
    });
});