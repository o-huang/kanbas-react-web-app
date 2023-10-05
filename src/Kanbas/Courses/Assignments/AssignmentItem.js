import React from "react";
import "./assignment-styles.css";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiPencilSquare } from "react-icons/hi2";
function AssignmentItem({ assignment }) {



  return (
    <div className="row pt-2">
      <div className="col-auto fa-bars icon-size">
        <FaBars />
      </div>
      <div className="col-auto fa-pen-to-square icon-size">
        <HiPencilSquare />
      </div>
      <div className="col">
        <div>
          <h5>{assignment.title}</h5>
          <p>
            Week 0 - SETUP - {assignment._id}-{assignment.course} - Week
            starting on Monday September 5th(9/5/2022) Module |<br />
            <b>Due</b> Sep 18, 2022 at 11:59pm | 100pts
          </p>
        </div>
      </div>
      <div className="col-auto ml-auto fa-circle-check icon-size">
        <AiFillCheckCircle />
      </div>
      <div className="col-auto icon-size">
        <FaEllipsisV />
      </div>
    </div>
  );
}

export default AssignmentItem;
