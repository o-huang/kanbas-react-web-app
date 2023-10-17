import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./kanbas-styles.css";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto kanbas-navigation-col">
            <KanbasNavigation />
          </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route
                path="Courses/:courseId/*"
                element={<Courses courses={courses} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
