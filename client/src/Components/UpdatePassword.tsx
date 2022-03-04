import React from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";
import { useMutation } from "apollo/client";

function UpdatePassword() {
  const [username, setUserName] = useState("");
  const [currentPassword, setCurrentPassword] = useState;
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Current Password.."
        onChange={(event) => {
          setCurrentPassword(event.target.value);
        }}
      />
      <input
        type="pass"
        placeholder="New password"
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />

      <button
        onClick={() => {
          updatePassword({
            variables: {
              username: username,
              oldPassword: currentPassword,
              newPassword: newPassword,
            },
          });
        }}
      >
        Update Password
      </button>
    </div>
  );
}

export default UpdatePassword;
