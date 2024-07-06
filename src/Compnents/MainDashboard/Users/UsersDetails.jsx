import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const UsersDetails = ({ todo, handleEditButton, handleDelete }) => {
  return (
    <div className="users-details-main">
      {/* details header  */}
      <div className="details-header">
        <p className="user-details">Name</p>
        <p className="user-email ">Email</p>
        <p className=" user-role ">Role</p>
        <p className="user-details">Login time</p>
        <p className="user-details ">Logout time</p>
        <p>User Activity</p>
        <p>
          <MdEdit size={20} />
        </p>
        <p>
          <MdDeleteForever size={20} />
        </p>
      </div>
      <div className=" md:h-64 overflow-y-auto">
        {todo.map((info, index) => (
          <div
            key={index}
            className="flex justify-between py-2 px-2 font-semibold"
          >
            <p className="user-details line-clamp-1">{info.name}</p>
            <p className="user-email">
              {info.email}
            </p>
            <p className="user-role">{info.role}</p>
            <p className="user-details">Login time</p>
            <p className="user-details">Logout time</p>
            <Link to={"/useractivity"}>User Activity</Link>
            <button onClick={() => handleEditButton(index)}>
              <MdEdit size={20} />
            </button>
            <button onClick={() => handleDelete(index)}>
              <MdDeleteForever size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersDetails;
