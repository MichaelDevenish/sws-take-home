import {app} from "../../app";
import request from "supertest";

describe("Test the company api", () => {
    test("It should list companies", async () => {
        const query =  `
          query test {
            listCompanies {
              id
              name
              tickerSymbol
              exchangeSymbol
              uniqueSymbol
              dateGenerated
              securityName
              exchangeCountryIso
              listingCurrencyIso
              canonicalUrl
              uniqueSymbolSlug
              scoreId
            }
          }
        `
        const response = await request(app)
            .post("/graphql")
            .send({query })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')

        expect(response.body).toMatchSnapshot()
        expect(response.status).toEqual(200)
    });

    test("It should be able to fetch a company with all relations", async () => {
        const query =  `
          query test {
            getCompany(companyId: "4BE2C01F-F390-479C-A166-8E0DD73CF7B9") {
              id
              name
              tickerSymbol
              exchangeSymbol
              uniqueSymbol
              dateGenerated
              securityName
              exchangeCountryIso
              listingCurrencyIso
              canonicalUrl
              uniqueSymbolSlug
              scoreId
              companyPriceClose {
                date
                companyId
                price
                dateCreated
              }
              companyPriceCloses {
                date
                companyId
                price
                dateCreated
              }
              companyScore {
                id
                companyId
                dateGenerated
                future
                health
                management
                past
                value
                misc
                total
                sentence
              }
            }
          }
        `
        const response = await request(app)
            .post("/graphql")
            .send({query })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')

        expect(response.body).toMatchSnapshot()
        expect(response.status).toEqual(200)
    });

    test("It should fail trying to load a campaign with no args", async () => {
        const query =  `
          query test {
            getCompany {
              id
            }
          }
        `
        const response = await request(app)
            .post("/graphql")
            .send({query })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')

        expect(response.body).toMatchSnapshot()
        expect(response.status).toEqual(400)
    });
});