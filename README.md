
## Getting started

To run this make sure that you have npm and node installed onto your system. If not follow the instructions here:
   - https://nodejs.org/en/download/package-manager

If you run into any trouble running this feel free to contact me at iammichaeldeve@gmail.com

### To run the server use the following commands:
  - `npm install` To install all of the required packages 
  - Then you can either run `npm run start:dev` or `npm run start` to start either the dev or production server 

### Accessing the server
  - Once the server is running you should be able to access it using any standard post client using a post request on `http://localhost:3000/graphql`
  - If your post client supports graphql you should be able to use that to build queries otherwise send a json request with a body similar to the following
    ```json
    {"query": "query {listCompanies {id}}"}
    ```

### To run tests: 
  - First if you have not started the server before, do that or run `npm run prisma:generate` to generate the prisma types
  - Then run the tests using `npm run test`

## Extensions

If i was to continue developing this the next steps I would make are as follows.

- Add some sort of jwt authentication, so that the data isn't publicly exposed
- Add automatic type generation from the graphql schema so the types don't have to be hardcoded like in `src/resolvers/company/resolvers.ts`

## Assumptions

- I was unsure if company score was a one to many 
  or a one-to-one relationship as it wasn't clear 
  in the database structure as there was no unique constraints.
  It should rather easy to make it one-to-many if required,
  but I assumed it is one to one for now.