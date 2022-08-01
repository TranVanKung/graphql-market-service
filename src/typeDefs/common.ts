import { gql } from 'apollo-server-express';

const commonTypeDef = gql`
  input Pagination {
    page: Int!
    perPage: Int!
    filter: String
    sorter: String
  }

  enum Permission {
    USER
    ADMIN
  }

  type CommonResponse {
    data: String
    code: Int
    message: String
    error: String
  }
`;

export default commonTypeDef;
