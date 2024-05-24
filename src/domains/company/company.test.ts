import {app} from "../../app";
import request from "supertest";

describe("Test the company api", () => {
    test("It should list companies", async () => {
        const query =  `
            query test {
              listCompanies {
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
        expect(response.status).toEqual(200)
    });
});