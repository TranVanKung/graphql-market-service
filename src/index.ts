import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSubgraphSchema } from '@apollo/subgraph';
import dotenv from 'dotenv';
import { startDatabaseConnection } from '@/services/database';
import resolvers from '@/resolvers';
import typeDefs from '@/typeDefs';

dotenv.config();

const graphQlPath = '/graphql';
const { PORT } = process.env;

startDatabaseConnection();

const apolloServer = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs,
      resolvers,
    },
  ]),
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      settings: {
        'editor.theme': 'dark',
      },
    }),
  ],
});

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());

(async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: graphQlPath });

  app.listen(PORT, () => {
    console.log(
      `🚀 GraphQL server ready at http://localhost:${PORT}${graphQlPath}`
    );
  });
})();
