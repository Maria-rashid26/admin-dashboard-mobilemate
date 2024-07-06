import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const UserActivity = () => {
  return (
    <div className="pt-5">
      <Link to={"/users"}>
        <IoMdArrowRoundBack />
      </Link>
      <div className="border-2 mt-4">
        lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
        odio nihil deserunt accusamus minus dolor vitae consequuntur, vel
        ducimus obcaecati inventore perferendis ab, deleniti quibusdam optio
        corporis aliquam. Rem, totam.
      </div>
    </div>
  );
};

export default UserActivity;
