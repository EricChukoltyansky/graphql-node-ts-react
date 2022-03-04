import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { useQuery } from "@apollo/client";

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);

  if (data) {
    console.log(data);
  }
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
            </div>
          );
        })}
    </div>
  );
}

export default ListOfUsers;
