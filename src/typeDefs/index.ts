import { gql } from 'apollo-server-express';
import { mergeTypeDefs } from '@graphql-tools/merge';
import commonTypeDef from './common';
import marketTypeDef from './market';

const initialTypeDef = gql`
  type Query {
    market_default_query: String
  }

  type Mutation {
    market_default_mutation: String
  }
`;

const rootTypeDef = [initialTypeDef, commonTypeDef, marketTypeDef];

export default mergeTypeDefs(rootTypeDef);
