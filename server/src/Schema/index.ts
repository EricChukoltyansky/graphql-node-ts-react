import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
