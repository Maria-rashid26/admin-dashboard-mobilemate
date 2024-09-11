import React from 'react'


const totalUsers = [
    { usersRole: "Users", numbers: 534, percentage: "11%" },
    { usersRole: "Admin", numbers: 34, percentage: "0.14%" },
    { usersRole: "Publishers", numbers: 74, percentage: "7%" },
    { usersRole: "Editors", numbers: 8, percentage: "14%" },
  ];
  
const UsersCategories = () => {
  return (
    <div className="cetegories-main">
    {totalUsers.map((users, index) => (
      <div
        key={index}
        className="total-users-div"
      >
        <div>
          <h3 className="user-role">{users.usersRole}</h3>
          <h1 className="user-numbers ">
            {users.numbers}
          </h1>
        </div>

        <span className="user-percent">
          {users.percentage}
        </span>
      </div>
    ))}
  </div>
  )
}

export default UsersCategories
