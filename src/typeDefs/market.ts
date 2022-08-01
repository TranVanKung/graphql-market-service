import { gql } from 'apollo-server-express';

const marketTypeDef = gql`
  type Market @key(fields: "_id") {
    _id: ID
    sparkLine: [String]
    token: ID
  }

  extend type Token @key(fields: "_id") {
    _id: ID @external
    sparkLine: [String]
    flag: String
  }

  input MarketInput {
    sparkLine: [String!]
    token: ID!
  }

  type MarketResponse {
    data: Market
    code: Int
    message: String
  }

  type PaginationMarket {
    data: [Market]
    totalData: Int
    totalPage: Int
    page: Int
    perPage: Int
    code: Int
    message: String
  }

  extend type Query {
    getAllMarket: PaginationMarket
  }

  extend type Mutation {
    createOneMarket(data: MarketInput!): MarketResponse
  }
`;

export default marketTypeDef;
