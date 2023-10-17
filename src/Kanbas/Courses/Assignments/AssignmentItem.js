import React from "react";
import "./assignment-styles.css";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiPencilSquare } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentReducer";
function AssignmentItem({ assignment }) {
  const dispatch = useDispatch();

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
            <b>Due </b>
            {assignment.due ? assignment.due : "no due date"} | 100pts
          </p>
        </div>
      </div>
      <div className="col-auto ml-auto fa-circle-check icon-size">
        <AiFillCheckCircle />
      </div>
      <div className="col-auto icon-size">
        <FaEllipsisV />
      </div>
      <button
        className="btn btn-danger col-auto "
        onClick={(event) => {
          event.preventDefault();
          dispatch(deleteAssignment(assignment._id));
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default AssignmentItem;
