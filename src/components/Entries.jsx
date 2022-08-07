import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import Popup from "reactjs-popup";
import { useDeleteEmployeeMutation } from "../services/api";
import "../styles/Entries.css";
import Button from "./Button";

const Entries = (props) => {
  const {handleClick}=props;
  // console.log(props)
  const [deleteEmployee, { isLoading }] = useDeleteEmployeeMutation();
  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(`Delete ${props.empId}`);
    deleteEmployee(props.empId);
    alert("Selected employee has been deleted");
    window.location.reload(false);
  };

  return (
    <div className="list-item" onClick={()=>handleClick()}>
      <div className="field">{props.name}</div>
      <div className="field">{props.empId}</div>
      <div className="field">{props.joiningDate}</div>
      <div className="field">{props.role}</div>
      <div className="field status">
        <span className={`span-status ${props.status}`}>{props.status}</span>
      </div>
      <div className="field">{props.experience}</div>
      <div className="field icons">
        {/* <Popup trigger={ */}
        <MdOutlineDelete
          className="delete-icon"
          onClick={(e) => {
            handleDelete(e);
          }}/>
        {/* } */}
          {/* position="center">
          <div classname="popup">
            <h3>Are you sure?</h3>
            <p>Do you really want to delete employee?</p>
            <Button className="create"label="Confirm"/>
            <Button className="cancel" label="Cancel"/>
          </div>
        </Popup> */}
        <MdOutlineEdit
          className="edit-icon"
          // onClick={()=>handleClick()}
        />
      </div>
    </div>
  );
};

export default Entries;