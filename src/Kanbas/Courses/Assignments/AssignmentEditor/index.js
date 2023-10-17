import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import "./assignment-editor-styles.css";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const newAssignment = useSelector((state) => state.assignmentReducer.newAssignment);
  console.log(assignment);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Saving assignment");
    if (newAssignment){
      dispatch(addAssignment(assignment));

    }else{
      dispatch(updateAssignment(assignment));

    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dispatch = useDispatch();
  return (
    <div class="container-fluid">
      <div className="row">
        <div class="d-flex flex-column-reverse align-items-end mt-3">
          <div className="publishArea fw-bold">
            <AiOutlineCheckCircle /> Published
            <button className="btn btn-secondary publishedButton generalButtonColor">
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <hr className="horizontal-line mt-2" />
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="form-group">
            <label for="inputText">
              <h5>Assignment Name</h5>
            </label>
            <input
              type="text"
              class="form-control"
              id="inputText"
              value={assignment.title}
              onChange={(e) =>
                dispatch(
                  selectAssignment({ ...assignment, title: e.target.value })
                )
              }
            />
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleTextarea"
              rows="4"
              placeholder="Enter your text here..."
              onChange={(e) =>
                dispatch(
                  selectAssignment({
                    ...assignment,
                    description: e.target.value,
                  })
                )
              }
            >
              {assignment.description ? assignment.description : ""}
            </textarea>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3 float">
          <h5 class="float-end">Points</h5>
        </div>
        <div class="col-9">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="inputText"
              value="100"
            />
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-3">
          <h5 class="float-end">Assignment Groups</h5>
        </div>
        <div class="col-9">
          <select class="form-select">
            <option selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3">
          <h5 class="float-end">Display Grade as</h5>
        </div>
        <div class="col-9">
          <select class="form-select">
            <option selected>Percentage</option>
          </select>
          <div class="mt-3">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="r3"
              value="option1"
            />
            <label class="form-check-label" for="r3">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3">
          <h5 class="float-end">Submission Type</h5>
        </div>
        <div class="col-9 submissionAndAssignBorder">
          <select class="form-select mt-2">
            <option selected>Online</option>
          </select>
          <div>
            <div class="mt-3">
              <b>Online Entry Options</b>
            </div>
            <div class="mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="onlineRadio1">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div class="mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio2"
                value="option1"
              />
              <label class="form-check-label" for="onlineRadio2">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div class="mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio3"
                value="option1"
              />
              <label class="form-check-label" for="onlineRadio3">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div class="mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio4"
                value="option1"
              />
              <label class="form-check-label" for="onlineRadio4">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div class="mt-2">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio5"
                value="option1"
              />
              <label class="form-check-label" for="onlineRadio5">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-3">
          <h5 class="float-end">Assign</h5>
        </div>
        <div class="col-9 submissionAndAssignBorder">
          <div class="form-group">
            <label for="assignTo">
              <h5>Assign To</h5>
            </label>
            <input
              type="text"
              class="form-control"
              id="assignTo"
              value="Everyone"
            />
          </div>

          <div>
            <div class="form-group">
              <label for="datepicker">Due:</label>
              <input
                type="date"
                id="datepicker"
                class="form-control"
                onChange={(e) =>
                  dispatch(
                    selectAssignment({ ...assignment, due: e.target.value })
                  )
                }
                value={assignment.due ? assignment.due : ""}
              />
            </div>
          </div>

          <div>
            <div class="row mt-3">
              <div class="col">
                <div class="form-group">
                  <label for="datepickerFrom">Available from</label>
                  <input
                    type="date"
                    id="datepickerFrom"
                    class="form-control"
                    value={
                      assignment.availableFrom ? assignment.availableFrom : ""
                    }
                    onChange={(e) =>
                      dispatch(
                        selectAssignment({
                          ...assignment,
                          availableFrom: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label for="datepickerUntil">Until</label>
                  <input
                    type="date"
                    id="datepickerUntil"
                    class="form-control"
                    value={
                      assignment.availableUntil ? assignment.availableUntil : ""
                    }
                    onChange={(e) =>
                      dispatch(
                        selectAssignment({
                          ...assignment,
                          availableUntil: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-secondary mt-3 assign-add-button generalButtonColor"
          >
            + Add
          </button>
        </div>
      </div>

      <hr className="horizontal-line" />
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="endRadioButton"
            value="option1"
          />
          <label class="form-check-label" for="endRadioButton">
            Notify users that this content has changed
          </label>
        </div>

        <div>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger"
          >
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-success me-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
