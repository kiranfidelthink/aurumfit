import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type Query {
    testMessage: String!,
    getAllUsers(limit : Int, offset: Int): [User],
    getUser(email: String, first: String, last: String): User
  }

  type User {
    firstName: String!,
    lastName: String!,
    email: String!,
    mobile: Int!
  }
`;

    