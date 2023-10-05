import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import ModuleItem from "./ModuleItem";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import {
  AiFillCheckCircle,
  AiOutlinePlus,
  AiFillCaretDown,
} from "react-icons/ai";
import { HiPencilSquare } from "react-icons/hi2";
import { BiCaretDown } from "react-icons/bi";
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      {modules.map((module, index) => (
        <ul className="list-group mt-3 moduleScreen">
          <li className="list-group-item list-group-item-secondary">
            <div className="row pt-2">
              <div className="col-auto">
                <FaBars className="fa-bar" />
              </div>
              <div className="col-auto">
                <h4>
                  <AiFillCaretDown /> {module.name}
                </h4>
              </div>
              <div className="col">
                <div className="float-end">
                  <AiFillCheckCircle className="fa-circle-check " />
                  <AiFillCaretDown />
                </div>
              </div>
              <div className="col-auto ml-auto">
                <AiOutlinePlus />
              </div>
              <div className="col-auto">
                <FaEllipsisV />
              </div>
            </div>
          </li>
          <ModuleItem key={index} module={module} />
        </ul>
      ))}
    </div>
  );
}

export default ModuleList;
