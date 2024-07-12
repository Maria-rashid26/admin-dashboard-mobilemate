import React from 'react'

const totalUsers = [
    { usersRole: "Total News", numbers: 534, percentage: "11%" },
    { usersRole: "Total Reviews", numbers: 34, percentage: "0.14%" },
    { usersRole: "Total Users", numbers: 74, percentage: "7%" },
    { usersRole: "Total Mobiles", numbers: 8, percentage: "14%" },
  ];
  
const DashboardCategories = () => {
  return (
    <div className="cetegories-main">
    {totalUsers.map((users, index) => (
      <div
        key={index}
        className="total-users-div"
      >
        <div>
          <h3 className="text-[12px] font-medium">{users.usersRole}</h3>
          <h1 className="text-gray-900 md:font-semibold md:text-xl text-[14px] font-semibold">
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

export default DashboardCategories
