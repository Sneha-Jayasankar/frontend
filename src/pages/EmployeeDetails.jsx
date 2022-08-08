import React from "react";
import { MdOutlineEdit } from "react-icons/md";
// import "../styles/EmployeeList.css";
import "../styles/EmployeeDetails.css";
import SideNavigation from "../components/SideNavigation";
import { Link, useParams } from "react-router-dom";
import { useGetEmployeeQuery } from "../services/api";

const EmployeeDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetEmployeeQuery(id);
  // console.log("data:",data.data.name);

  return (
    <div className="employeedetail">
      <SideNavigation />
      <main>
      <div className="emp-main">
        <div className="heading">
          <h1>Employee Details</h1>
          <Link to={`/edit/${id}`} className="create-emp edit-emp">
            <span className="create-emp-span">
              <MdOutlineEdit />
            </span>
            <div className="editcontent">Edit</div>
          </Link>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="emp-details">
            <div className="emp-details-column">
              <div className="emp-details-attribute">Employee Name</div>
              <div className="emp-details-attribute">{data.data.name}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Employee ID</div>
              <div className="emp-details-attribute">{data.data.id}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Joining Date</div>
              <div className="emp-details-attribute">{data.data.joiningdate}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Role</div>
              <div className="emp-details-attribute">{data.data.role}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Status</div>
              <div
                className={`emp-details-attribute ${data.data.status} span-status-detail`}
              >
                {data.data.status}
              </div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Experience</div>
              <div className="emp-details-attribute">{data.data.experience}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Address</div>
              <div className="emp-details-attribute">{data.data.address.address_line1},</div>
              <div className="emp-details-attribute">{data.data.address.address_line2},</div>
              <div className="emp-details-attribute">{data.data.address.city},</div>
              <div className="emp-details-attribute">{data.data.address.state},</div>
              <div className="emp-details-attribute">{data.data.address.pin}</div>
            </div>
          </div>
        )}
      </div>
      </main>
    </div>
  );
};

export default EmployeeDetails;