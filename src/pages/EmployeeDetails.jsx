import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import "./styles/EmployeeList.css";
import "./styles/EmployeeDetails.css";
import fileImg from "./assets/file.png";
import SideNavigation from "../components/SideNavigation";

const EmployeeDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetEmployeeQuery(id);

  return (
    <div className="app">
      <SideNavigation />
      <div className="emp-main">
        <div className="heading">
          <h1>Employee Details</h1>
          <Link to={`/edit/${id}`} className="create-emp edit-emp">
            <span className="create-emp-span">
              <MdOutlineEdit />
            </span>
            <div>Edit</div>
          </Link>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="emp-details">
            {console.log(data)}
            <div className="emp-details-column">
              <div className="emp-details-attribute">Employee Name</div>
              <div className="emp-details-attribute">{data.name}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Employee ID</div>
              <div className="emp-details-attribute">{data.empId}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Joining Date</div>
              <div className="emp-details-attribute">{data.joiningDate}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Role</div>
              <div className="emp-details-attribute">{data.role}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Status</div>
              <div
                className={`emp-details-attribute ${data.status} span-status-detail`}
              >
                {data.status}
              </div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Experience</div>
              <div className="emp-details-attribute">{data.experience}</div>
            </div>
            <hr style={{ width: "100%", margin: "10px" }} />
            <div className="emp-details-column">
              <div className="emp-details-attribute">Address</div>
              <div className="emp-details-attribute">{data.address}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Employee ID Proof</div>
              <div className="emp-details-attribute fileImg">
                {/* <img src={fileImg}></img> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;