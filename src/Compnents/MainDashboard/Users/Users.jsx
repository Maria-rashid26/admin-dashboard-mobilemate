import React, { useContext, useState } from "react";

import { IoMdPersonAdd } from "react-icons/io";
import UsersCategories from "./UsersCategories";
import UsersDetails from "./UsersDetails";
import UserAddForm from "./UserAddForm";
import { UserConetxt } from "./UserProvider";

const Users = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const {users , setUsers , todo , setTodo, editTodo , setEdittodo} = useContext(UserConetxt)
  // const [users, setUsers] = useState({ name: "", email: "", role: "" });
  // const [todo, setTodo] = useState([]);
  // const [editTodo, setEdittodo] = useState(null);

  const handleFormVisible = () => {
    setFormVisible(!isFormVisible);
  };

  const handleEditButton = (index) => {
    setUsers(todo[index]);
    setEdittodo(index);
    setFormVisible(true);
  };

  const handleDelete = (index) => {
    const updatedtodos = todo.filter((_, i) => i !== index);
    setTodo(updatedtodos);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!users.name || !users.email) return;

    const updatedTodos = editTodo !== null
      ? todo.map((item, index) => index === editTodo ? users : item)
      : [...todo, users];

    setTodo(updatedTodos);
    setUsers({ name: "", email: "", role: "" });
    setEdittodo(null);
    setFormVisible(false);
  };

  return (
    <div className=" text-xs mt-2 relative">
      <div className="flex justify-between">
        <div>
          <h1 className="users-heading">User's</h1>
          <p className="users-p">You can find all users here</p>
        </div>
        <button
          onClick={handleFormVisible}
          className="add-btn"
        >
          <IoMdPersonAdd size={23} className="m-1" />
        </button>
      </div>

      

      {/* USERS CATORIES STARTS */}

      <UsersCategories />

      {/* USERS CATORIES ENDS */}

      {/* USERS DETAILS STARTS */}

      <UsersDetails
        todo={todo}
        handleEditButton={handleEditButton}
        handleDelete={handleDelete}
      />

      {/* USERS DETAILS ENDS */}

      {/* {isFormVisible ? (
        <UserAddForm
          handleFormVisible={handleFormVisible}
          submitForm={submitForm}
          handleChange={handleChange}
          users={users}
        />
      ) : (
        ""
      )} */}
         {isFormVisible && (
        <UserAddForm
          handleFormVisible={handleFormVisible}
          submitForm={submitForm}
          handleChange={handleChange}
          users={users}
     
        />
      )}
    </div>
  );
};

export default Users;


