import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard-styles.css";
import CoureCard from "./CourseCard";
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const editCourse = (courseId) => {
  //   setCourse(courses.find((course) => course._id === courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Dashboard</h1>

        <hr className="horizontal-line" />
      </div>
      <div className="row mx-3">
        <h3>Published Courses ({db.courses.length})</h3>
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button onClick={addNewCourse}>Add</button>
        <button onClick={updateCourse}>Update</button>

        <hr className="horizontal-line" />
      </div>
      <div className="row mx-1">
        <div className="d-flex flex-wrap">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>

              <CoureCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
