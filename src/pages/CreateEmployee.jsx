import Button from "../components/Button"
import InputField from "../components/InputField"
import InputSelect from "../components/InputSelect"
import SideNavigation from "../components/SideNavigation"
import '../styles/CreateEmployee.css'

const CreateEmployee=({ update }) => {
    return(
    <div>
        <SideNavigation/>
        <main>
            <div className="header">
            {update ? <h1>Update Employee</h1> : <h1>Create Employee</h1>}
            </div>
            <form id="forms" className="form" name="form1" action="#" method="post">
                <div className="flex-container">
                     <div className="form-input">
                        <label>Employee Name</label>
                        <InputField type="text" placeholder="Employee Name" name="name"/>
                        <p id="error-name" className="error"></p>
                    </div>
                    {/* <!-- enter employee id in form e-123 etc --> */}
                    <div className="form-input">
                        <label>Employee ID</label>
                        <InputField type="text" placeholder="Employee Id" name="id"/>
                        <p id="error-id" className="error"></p>
                    </div>
                    <div className="form-input">
                        <label>Joining Date</label>
                        <InputField type="text" placeholder="Joining Date" name="joiningdate"/>
                        <p id="error-date" className="error"></p>
                    </div>
                    <div className="form-input">
                        <InputSelect
                            label="Role"
                            className="select"
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
                            className="select"
                            options={[
                                {key:'active',value:'active',name:'active'},
                                {key:'inactive',value:'inactive',name:'inactive'},
                                {key:'probation',value:'probation',name:'probation'}
                            ]}/>
                    </div>
                    <div className="form-input">
                        <label>Experience</label>
                        <InputField type="text" placeholder="Experience" name="experience"/>
                        <p id="error-experience" className="error"></p>
                    </div>
                    <div className="form-input">
                        <label>Address</label>
                        <InputField type="text" placeholder="Address"/>
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
                        <Button id="createb" className="create" onclick="return validateForm()" label="Create"/>
                        <Button className="cancel" value="Cancel" label ="Cancel"/>    
                </div>
            </form>
        </main>
    </div>
    )
};

export default CreateEmployee