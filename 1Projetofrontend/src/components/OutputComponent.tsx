import React from "react";

interface User {
  id: string;
  username: string;
  email: string;
}

interface OutputComponentProps {
  users: User[];
  info: boolean;
}

const OutputComponent = ({ users, info }: OutputComponentProps) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li className="flex justify-between border-b-4" key={user.id}>
            <div className="flex ">
              <p className="my-3 px-3">{user.username}</p>
              <p className="my-3 px-3">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>{info ? "Loading" : "Done"}</div>
    </div>
  );
};

export default OutputComponent;
