import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import InputSelect from "./InputSelect";

const Form = ({ update, data }) => {
  const initialState = data
    ? data
    : {
        name: "",
        empId: "",
        joiningDate: "",
        email: "",
        experience: "",
        address: "",
        idProof: "",
        role: "",
        status: "",
      };
  const [empData, setEmpData] = useState(initialState);

  const [addNewEmployee] = useAddNewEmployeeMutation();
  const navigate = useNavigate();
  const [updateEmployee] = useUpdateEmployeeMutation();

  const handleChange = (name, value) => {
    setEmpData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEmployee(empData).unwrap();
    setEmpData({
      name: "",
      empId: "",
      joiningDate: "",
      email: "",
      experience: "",
      address: "",
      idProof: "",
      role: "",
      status: "",
    });
    navigate("/list");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateEmployee({ empData: empData, id: data.id }).unwrap();
    setEmpData({
      name: "",
      empId: "",
      joiningDate: "",
      role: "",
      status: "",
      experience: "",
      idProof: "",
    });
    navigate("/list");
  };

  const formFields = [
    {
      key: 1,
      label: "Employee Name",
      type: "text",
      placeholder: "Employee Name",
      name: "name",
    },
    {
      key: 2,
      label: "Employee ID",
      type: "text",
      placeholder: "Employee ID",
      name: "empId",
    },
    {
      key: 3,
      label: "Joining Date",
      type: "date",
      placeholder: "Joining Date",
      name: "joiningDate",
    },
    {
      key: 5,
      label: "Experience",
      type: "text",
      placeholder: "Experience",
      name: "experience",
    },
    {
      key: 7,
      label: "Upload ID Proof",
      type: "file",
      name: "idProof",
    },
  ];
  return (
    <form>
      <div className="details">
        {formFields.map((item) => {
          return (
            <div className="data" key={item.key}>
              <InputField
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                onChange={handleChange}
                name={item.name}
                value={empData[item.name]}
              />
            </div>
          );
        })}
        <div className="data">
          <InputSelect
            label="Role"
            options={[
              { key: 1, value: "engineer", name: "engineer" },
              { key: 2, value: "hr", name: "hr" },
              { key: 3, value: "manager", name: "manager" },
              { key: 4, value: "admin", name: "admin" },
            ]}
            onChange={handleChange}
            name="role"
            value={empData.role}
          />
        </div>
        <div className="data">
          <InputSelect
            label="Status"
            options={[
              { key: 1, value: "active"},
              { key: 2, value: "inactive"},
              { key: 3, value: "probation"},
            ]}
            onChange={handleChange}
            name="status"
            value={empData.status}
          />
        </div>
      </div>
      <div className="buttons">
        <Button
          className="createb"
          label={update ? "Edit" : "Create"}
          handleClick={update ? handleUpdate : handleSubmit}
        />
        <Button
          className="cancelb"
          label="Cancel"
          handleClick={() => {
            navigate("/list");
          }}
        />
      </div>
    </form>
  );
};

export default Form;