import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import InputField from "../../components/InputField"
import InputSelect from "../../components/InputSelect"
import SideNavigation from "../../components/sidenavigation/SideNavigation"
import { useCreateEmployeeMutation } from "../../services/api"
import './CreateEmployee.css'

const CreateEmployee=() => {

    const [createEmployee] = useCreateEmployeeMutation();
    const navigate = useNavigate(); 
    const [state, setState] = useState({});
console.log("state=",state);
    
    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value,
        })
    };

    const handleSubmit = (e) => {
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
        console.log("state=",newEmp.status);
    
        createEmployee(newEmp);
        navigate("/list");
      };
    useEffect(()=>{
        setState({
            name: "",
            // empId: "",
            joiningdate:"",
            experience:"",
            address_line1:"",
            address_line2:"",
            city:"",
            state:"",
            pin:"",
            role:"",
            status:"",
    })
    },[]);

    return(
    <div>
        <SideNavigation/>
        <main>
            <div className="header">
            <h1>Create Employee</h1>
            </div>
            <div id="forms" className="form" name="form1">
                <div className="flex-container">
                     <div className="form-input">
                        <label>Employee Name</label>
                        <InputField type="text" id="name" placeholder="Employee Name" name="name" onChange={(value) => onChangeValue("name", value)}/>
                        {/* <p id="error-name" className="error"></p> */}
                    </div>
                    <div className="form-input">
                        <label>Employee ID</label>
                        <InputField type="text" id="eid" placeholder="Employee Id" name="id" onChange={(value) => onChangeValue("empId", value)}/>
                        {/* <p id="error-id" className="error"></p> */}
                    </div>
                    <div className="form-input">
                        <label>Joining Date</label>
                        <InputField type="text" id="jdate" placeholder="Joining Date" name="joiningDate" onChange={(value) => onChangeValue("joiningdate", value)}/>
                        {/* <p id="error-date" className="error"></p> */}
                    </div>
                    <div className="form-input">
                        <InputSelect
                            label="Role"
                            className="select"
                            id="role"
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
                        <InputField type="text" id="experience" placeholder="Experience" name="experience" onChange={(value) => onChangeValue("experience", value)}/>
                        {/* <p id="error-experience" className="error"></p> */}
                    </div>
                    <div className="form-input">
                        <label>Address_line1</label>
                        <InputField type="text" id="address_line1" placeholder="Address line 1" onChange={(value) => onChangeValue("address_line1", value)}/>
                    </div>
                    <div className="form-input">
                        <label>Address_line1</label>
                        <InputField type="text" id="address_line2" placeholder="Address line 2" onChange={(value) => onChangeValue("address_line2", value)}/>
                    </div>
                    <div className="form-input">
                        <label>City</label>
                        <InputField type="text" id="city" placeholder="City" onChange={(value) => onChangeValue("city", value)}/>
                    </div>
                    <div className="form-input">
                        <label>State</label>
                        <InputField type="text" id="state" placeholder="State" onChange={(value) => onChangeValue("state", value)}/>
                    </div>
                    <div className="form-input">
                        <label>Pin</label>
                        <InputField type="text" id="pin" placeholder="Address" onChange={(value) => onChangeValue("pin", value)}/>
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
                        <Button id="createb" className="create" handleClick={(e) => handleSubmit(e)} label="Create"/>
                        <Button className="cancel" value="Cancel" label ="Cancel"/>    
                </div>
            </div>
        </main>
    </div>
    )
};

export default CreateEmployee;