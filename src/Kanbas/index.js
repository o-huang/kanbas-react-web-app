import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./kanbas-styles.css";

function Kanbas() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto kanbas-navigation-col">
          <KanbasNavigation />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Kanbas;
