import React from "react";

const UserAddForm = ({ users, submitForm, handleChange ,handleFormVisible }) => {
  return (
    <div className="usrform-main ">
      <form
        onSubmit={submitForm}
        action=""
        className="user-form"
      >
        <div onClick={handleFormVisible} className="form-X-btn">
          X
        </div>
        <h1 className="text-xl text-white font-semibold text-center">
          Enter details
        </h1>
        <div>
          <input
            type="name"
            name="name"
            className="form-input"
            onChange={handleChange}
            value={users.name}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            className="form-input"
            onChange={handleChange}
            value={users.email}
            placeholder="Enter email"
          />
        </div>
        <div>
          <input
            type="password"
            className="form-input"
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="password"
            className="form-input"
            placeholder="Confirm Password "
          />
        </div>
        <div>
          <select
            className="form-input"
            onChange={handleChange}
            name="role"
            value={users.role}
          >
            <option value="" className="form-opt">
              Select a Role
            </option>
            <option value="Admin" className="form-opt">
              Admin
            </option>
            <option value="Editor" className="h-8">
              Editor
            </option>
            <option value="Publisher">Publisher</option>
          </select>
        </div>
        <button
          type="submit"
          className="form-submit-btn"
        >
          Submite
        </button>
      </form>
      /
    </div>
  );
};

export default UserAddForm;
