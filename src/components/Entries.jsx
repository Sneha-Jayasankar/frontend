import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import "../styles/Entries.css";

const Entries = (props) => {
  return (
    <div className="list-item">
      <div className="field">{props.name}</div>
      <div className="field">{props.empId}</div>
      <div className="field">{props.joiningDate}</div>
      <div className="field">{props.role}</div>
      <div className="field status">
        <span className={`span-status ${props.status}`}>{props.status}</span>
      </div>
      <div className="field">{props.experience}</div>
      <div className="field icons">
        <MdOutlineDelete
          className="delete-icon"
        />
        <MdOutlineEdit
          className="edit-icon"
        />
      </div>
    </div>
  );
};

export default Entries;