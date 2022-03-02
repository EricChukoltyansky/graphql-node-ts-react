import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(): string {
    return [];
  },
};
