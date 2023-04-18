# Demo Project

A small demo projects to showcase my methodology when building projects.
It doesn't aim to be perfect, but rather to give an impression of what my code looks like.

## Things that could be improved with more time

- more and more complex/thorough (i.e. hook/components tests with `react-testing-library`) unit tests; more integration tests with `cypress`
- api URLs in preview builds pointing to frontend preview builds
- more fine tuned component structure and separation
- more complex GraphQL endpoints i.e. Prisma ORM integration
- Authentication layer with NextAuth
- NextJS `app` directory demo
- more complex UI example, not just a TailwindUI derivative

## What's inside?

Some things showcased in this demo include:

- Monorepo with Turbo
- Packages with for configurations and shared UI
- General tooling: Prettier, ESLint
- React i18n for translation and string management
- Example REST & GraphQL API: NextJS with TypeScript
  - Built with Yoga
  - Resolver and Query type generation with `graphql-codegen`
  - Resolver Composition for protecting resolvers
  - Simple REST Endpoint
- Example Web Application: NextJS with TypeScript
  - TailwindCSS for styling
  - react-query for client side requests
  - graphql-request for client and server requests
- Jest for Unit Testing
  - Sample some simple tests

## Apps and Packages

- `api`: a [Next.js](https://nextjs.org/) app using api routes to demo a REST and GraphQL endpoint
- `web`: a [Next.js](https://nextjs.org/) app for hosting a super simple frontend
- `ui`: a stub React component library shared by both `web` and potential future applications
- `eslint-config`: `eslint` configuration used throughout the monorepo
- `ts-config`: `typescript` configurations used throughout the monorepo
- `jest-config`: `jest` configuration used throughout the monorepo
- `next-config`: `next` configuration used throughout the monorepo
- `tailwind-config`: `tailwind` and `postcss` configurations used throughout the monorepo

## Build

To build all apps and packages, run the following command:

```
# run this in root dir
npm install
npm build
```

## Develop

To develop all apps and packages, run the following command:

```
# run this in root dir
npm install
npm dev
```

## Utilities

This example uses the following tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) (including some sub packages)
- [graphql-request](https://github.com/jasonkuhrt/graphql-request)
- [react-query](https://tanstack.com/query/latest/)
- [TailwindCSS](https://tailwindcss.com/)
- [jest (ts-jest)](https://jestjs.io/)

## Useful Links

- [Demo API GraphQL](https://example-project-api.vercel.app/api/graphql)
- [Demo API Rest](https://example-project-api.vercel.app/api/rest/person/random)
- [Demo Web](https://example-project-web.vercel.app/)
- [Initial Readme](https://github.com/vercel/turbo/tree/main/examples/basic)
