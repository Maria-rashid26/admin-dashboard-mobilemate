import React, { createContext, useState } from "react";

export const UserConetxt = createContext();
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState({ name: "", email: "", role: "" });
  const [todo, setTodo] = useState([]);
  const [editTodo, setEdittodo] = useState(null);

  return (
    <div>
      <UserConetxt.Provider
        value={{ users, setUsers, todo, setTodo, editTodo, setEdittodo }}
      >
        {children}
      </UserConetxt.Provider>
    </div>
  );
};

export default UserProvider;
