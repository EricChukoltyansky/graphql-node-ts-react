import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { useQuery } from "@apollo/client";

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);

  const deleteUser = (id: number) => {};
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
              <button onClick={() => deleteUser(user.id)}>Delete User</button>
            </div>
          );
        })}
    </div>
  );
}

export default ListOfUsers;
