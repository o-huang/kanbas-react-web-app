import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import "./assignment-styles.css";
import AssignmentItem from "./AssignmentItem";
import { AiOutlinePlus, AiFillCaretDown } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputText"
            placeholder="Search for Assignment"
          />
        </div>
        <div className="col">
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary ms-3 generalButtonColor">+ Group</button>
            <button className="btn btn-danger ms-3">+ Assignment</button>
            <button className="btn btn-secondary ms-3 generalButtonColor">
              <FaEllipsisV />
            </button>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="list-group assignmentScreen">
          <li className="list-group-item list-group-item-secondary">
            <div className="row pt-2">
              <div className="col-auto">
                <FaBars />
              </div>
              <div className="col-auto">
                <h4>
                  <AiFillCaretDown /> Assignments
                </h4>
              </div>
              <div className="col">
                <div className="float-end score rounded-pill">40% of Total</div>
              </div>
              <div className="col-auto ml-auto">
                <AiOutlinePlus />
              </div>
              <div className="col-auto">
                <FaEllipsisV />
              </div>
            </div>
          </li>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item"
            >
              <AssignmentItem assignment={assignment} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignments;
