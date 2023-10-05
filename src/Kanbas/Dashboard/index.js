import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard-styles.css";
import CoureCard from "./CourseCard";


function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">

        <h1>Dashboard</h1>
        <hr className="horizontal-line" />
      </div>
      <div className="row mx-3">
        <h3>Published Courses ({db.courses.length})</h3>
        <hr className="horizontal-line" />
      </div>
      <div className="row mx-1">
        <div className="d-flex flex-wrap">
          {db.courses.map((course) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
        
            >
              <CoureCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
