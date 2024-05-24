
## Getting started

To run this I assume that you already have npm and node installed onto your system. Otherwise follow the instructions here:
   - https://nodejs.org/en/download/package-manager

To get started run the following commands:
  - `npm install` To install all of the required packages 
  - Then you can either run `npm run start:dev` or `npm run start` to start either the dev or production server 

To run tests: 
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