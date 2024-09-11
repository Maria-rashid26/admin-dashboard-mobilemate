import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const UsersDetails = ({ todo, handleEditButton, handleDelete }) => {
  return (
    <div className="users-details-main border rounded-md shadow-md" >
      {/* details header  */}
      <div className="details-header">
        <p className="user-details">Name</p>
        <p className="user-email ">Email</p>
        <p className=" user-details ">Role</p>
        <p className="user-details">Login time</p>
        <p className="user-details ">Logout time</p>
        <p>User Activity</p>
        <p>
          <MdEdit size={20} className="p-[3px] md:p-0"/>
        </p>
        <p>
          <MdDeleteForever size={20} className="p-[3px] md:p-0"/>
        </p>
      </div>
      <div className=" md:h-[19rem] overflow-y-auto h-[13rem] shadow-md shadow-gray-900 px-1">
        {todo.map((info, index) => (
          <div
            key={index}
            className="flex md:justify-between py-2 md:px-2 space-x-1 md:space-x-0  px-1 md:font-semibold  md:text-xs text-[10px]"
          >
            <p className="user-details line-clamp-1">{info.name}</p>
            <p className="user-email">
              {info.email}
            </p>
            <p className="user-details">{info.role}</p>
            <p className="user-details">03:49:94</p>
            <p className="user-details">47:48:00</p>
            <Link to={"/useractivity"}>User Activity</Link>
            <button onClick={() => handleEditButton(index)}>
              <MdEdit size={20} className="p-[3px] md:p-0" />
            </button>
            <button onClick={() => handleDelete(index)}>
              <MdDeleteForever  size={20} className="p-[3px] md:p-0"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersDetails;
