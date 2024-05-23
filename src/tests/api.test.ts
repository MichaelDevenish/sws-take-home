import {app} from "../app";
import request from "supertest";

describe("Test the graphql api", () => {
    test("It should respond to a simple post", async () => {
        const response = await request(app)
            .post("/graphql")
            .send({query: `query test {  test }`})
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')

        expect(response.body).toMatchSnapshot()
        expect(response.status).toEqual(200)
    });
    test("It should complain if no query string is provided", async () => {
        const response = await request(app)
            .post("/graphql")
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')

        expect(response.body).toMatchSnapshot()
        expect(response.status).toEqual(400)
    });
});