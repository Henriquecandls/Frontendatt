import { useEffect, useState } from "react";
import axios from "axios";

interface componentprops {
    users: string[];
    info:boolean;
}
function OutputComponent({users,info}: componentprops) {

  return (
    <div>
      <ul>
        {users.data.map((user) => (
          <li className="flex justify-between border-b-4" key={user.id}>
            <div className="flex">
              <p className="my-3 px-3">{user.username}</p>
              <p className="my-3 px-3">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>(info? "Loading</div>
    </div>
  );
}

export default OutputComponent;