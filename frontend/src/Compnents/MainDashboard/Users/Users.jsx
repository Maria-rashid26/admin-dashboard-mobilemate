import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IoMdPersonAdd } from "react-icons/io";
import UsersCategories from "./UsersCategories";
import UsersDetails from "./UsersDetails";
import UserAddForm from "./UserAddForm";
import { UserConetxt } from "./UserProvider";

const Users = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const { users, setUsers, todo, setTodo, editTodo, setEdittodo } =
    useContext(UserConetxt);

  useEffect(() => {
    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users/api");
        setTodo(response.data); // Assuming `data` is an array of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [setTodo]);

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

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   if (!users.name || !users.email) return;

  //   const updatedTodos =
  //     editTodo !== null
  //       ? todo.map((item, index) => (index === editTodo ? users : item))
  //       : [...todo, users];

  //   setTodo(updatedTodos);
  //   setUsers({ name: "", email: "", role: "" });
  //   setEdittodo(null);
  //   setFormVisible(false);
  // };
  const submitForm = async (e) => {
    e.preventDefault();
    if (!users.name || !users.email) return;
  
    try {
      if (editTodo !== null) {
        const updatedTodos = todo.map((item, index) =>
          index === editTodo ? users : item
        );
        setTodo(updatedTodos);
      } else {

        const response = await axios.post('http://localhost:3000/users/api', users);
        console.log(response.data);
        setTodo([...todo, users]);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  
    setUsers({ name: '', email: '', role: '' });
    setEdittodo(null);
    setFormVisible(false);
  };
  
  return (
    <div className=" text-xs mt-1 overflow-y-hidden relative">
      <div className="flex justify-between">
        <div>
          <h1 className="users-heading">User's</h1>
          <p className="users-p">You can find all users here</p>
        </div>
        <button onClick={handleFormVisible} className="add-btn">
          <IoMdPersonAdd size={23} className="m-1" />
        </button>
      </div>

      <UsersCategories />

      <UsersDetails
        todo={todo}
        handleEditButton={handleEditButton}
        handleDelete={handleDelete}
      />

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
