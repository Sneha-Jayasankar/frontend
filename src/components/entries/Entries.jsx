import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteEmployeeMutation} from "/home/sneha/Desktop/frontend-folder/reactapp/src/services/api.js";
import "./Entries.css";


const Entries = (props) => {
  const {handleClick}=props;
  const navigate=useNavigate();
  // console.log(props)
  const id=props.empId;
  const [deleteEmployee] = useDeleteEmployeeMutation();
  // const { data } = useGetEmployeeQuery(id);

  //delete function
  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(`Delete ${props.empId}`);
    deleteEmployee(props.empId);
    alert("Selected employee has been deleted");
    window.location.reload(false);
  };

//edit function
  const handleEdit=(e)=>{
    e.stopPropagation();
    navigate(`/edit/${id}`);
  }
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
        <MdOutlineEdit
          className="edit-icon"
          onClick={(e)=>{handleEdit(e);}}
        />
      </div>
    </div>
  );
};

export default Entries;