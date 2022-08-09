import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import InputSelect from "../../components/InputSelect";
import SideNavigation from "../../components/sidenavigation/SideNavigation";
import { useGetEmployeeQuery } from "../employeedetails/EmployeeDetailsApi";
import { useUpdateEmployeeMutation } from "./UpdateEmployeeApi";


const UpdateEmployee=() => {
    const { id } = useParams();
    const { data } = useGetEmployeeQuery(id);
    const [updateEmployee] = useUpdateEmployeeMutation(id);
    const navigate = useNavigate(); 
    const [state, setState] = useState({});

  const handleUpdate = (e) => {
    e.preventDefault();
    const newEmp = {
        name: state.name,
        joiningdate: state.joiningdate,
        experience:state.experience,
        role:state.role,
        status:state.status,
        address: {
            address_line1: state.address_line1,
            address_line2:state.address_line2,
            city:state.city,
            state:state.state,
            pin:state.pin
        }
    }
    updateEmployee({id:id, state:newEmp});
    navigate("/list");
  };

    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value,
        })
    };
    useEffect(()=>{
        if(data){
        setState({
            name: data.data.name,
            joiningdate:data.data.joiningdate,
            experience:data.data.experience,
            address_line1:data.data.address.address_line1,
            address_line2:data.data.address.address_line2,
            city:data.data.address.city,
            state:data.data.address.state,
            pin:data.data.address.pin,
            role:data.data.role,
            status:data.data.status,
    })}
    },[data]);

    return(
    <div>
        <SideNavigation/>
        <main>
            <div className="header">
            <h1>Update Employee</h1>
            </div>
            <div id="forms" className="form" name="form1">
                <div className="flex-container">
                     <div className="form-input">
                        <label>Employee Name</label>
                        <InputField type="text" id="name" value={state.name} placeholder="Employee Name" name="name" onChange={(value) => onChangeValue("name", value)}/>
                    </div>
                    <div className="form-input">
                        <label>Employee ID</label>
                        <InputField type="text" id="eid" placeholder="Employee Id" name="id" onChange={(value) => onChangeValue("empId", value)}/>
                    </div>
                    <div className="form-input">
                        <label>Joining Date</label>
                        <InputField type="text" id="jdate" value={state.joiningdate} placeholder="Joining Date" name="joiningDate" onChange={(value) => onChangeValue("joiningdate", value)}/>
                    </div>
                    <div className="form-input">
                        <InputSelect
                            label="Role"
                            className="select"
                            id="role"
                            value={state.role}
                            onChange={(value) => onChangeValue("role", value)}
                            options={[
                                {key:'engineer',value:'engineer',name:'engineer'},
                                {key:'hr',value:'hr',name:'hr'},
                                {key:'admin',value:'admin',name:'admin'},
                                {key:'manager',value:'manager',name:'manager'}
                            ]}/>
                    </div>
                    <div className="form-input">
                        <InputSelect
                            label="Status"
                            id="status"
                            value={state.status}
                            className="select"
                            onChange={(value) => onChangeValue("status", value)}
                            options={[
                                {key:'active',value:'active',name:'active'},
                                {key:'inactive',value:'inactive',name:'inactive'},
                                {key:'probation',value:'probation',name:'probation'}
                            ]}/>
                    </div>
                    <div className="form-input">
                        <label>Experience</label>
                        <InputField type="text" id="experience" value={state.experience} placeholder="Experience" name="experience" onChange={(value) => onChangeValue("experience", value)}/>
                    </div>
                    <div className="form-input">
                        <label>Address_line1</label>
                        <InputField type="text" id="address_line1" value={state.address_line1} placeholder="Address line 1" onChange={(value) => onChangeValue("address_line1", value)}/>
                    </div>
                    <div className="form-input">
                        <label>Address_line1</label>
                        <InputField type="text" id="address_line2" value={state.address_line2} placeholder="Address line 2" onChange={(value) => onChangeValue("address_line2", value)}/>
                    </div>
                    <div className="form-input">
                        <label>City</label>
                        <InputField type="text" id="city" placeholder="City" value={state.city} onChange={(value) => onChangeValue("city", value)}/>
                    </div>
                    <div className="form-input">
                        <label>State</label>
                        <InputField type="text" id="state" placeholder="State"value={state.state} onChange={(value) => onChangeValue("state", value)}/>
                    </div>
                    <div className="form-input">
                        <label>Pin</label>
                        <InputField type="text" id="pin" placeholder="Pin" value={state.pin} onChange={(value) => onChangeValue("pin", value)}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="proof">Upload ID Proof</label>
                        <InputField type="file" id="proof" name="proof"/>
                        <div className="choose-file">
                            <label className="choose-file-header">Choose file</label>        
                            <label className="browse" htmlFor="proof">Browse</label>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                        <Button id="createb" className="create" handleClick={(e) => handleUpdate(e)} label="Update"/>
                        <Button className="cancel" value="Cancel" label ="Cancel"/>    
                </div>
            </div>
        </main>
    </div>
    )
};

export default UpdateEmployee;