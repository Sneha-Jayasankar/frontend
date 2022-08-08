import { Link, useNavigate } from "react-router-dom";
import InputSelect from "../components/InputSelect";
import SideNavigation from "../components/SideNavigation";
import '../styles/EmployeeList.css'
import Entries from "../components/Entries";
import { useGetAllEmployeesQuery } from "../services/api";
const EmployeeList=()=>{

    const { data, error, isLoading } = useGetAllEmployeesQuery();
    const navigate = useNavigate();
    const displayEmployee = (id) => {
      navigate(`/list/${id}`);
    };
 
    return(
        <div className="app-root">
            <SideNavigation/>
            <main>
                <div className="heading">
                    <h1>Employee List</h1>
                    <div className="filterby">
                    <p>Filterby</p>
                    <InputSelect
                        className="filterbycontent"
                        options={[
                        { key: 1, value: "name", name: "Employee Name" },
                        { key: 2, value: "empId", name: "Employee ID" },
                        { key: 3, value: "joiningDate", name: "Joining Date" },
                        { key: 4, value: "role", name: "Role" },
                        { key: 5, value: "status", name: "Status" },
                        { key: 6, value: "experience", name: "Experience" },
                        ]}
                    />
                    </div>
                    <Link to="/create" className="create-emp">
                        <span className="create-emp-span">+</span>
                        <div>Create Employee</div>
                    </Link>
                </div>
                <div className="list-header">
                    <div className="list-item-header">
                        <div className="header-field">Employee Name</div>
                        <div className="header-field">Employee ID</div>
                        <div className="header-field">Joining Date</div>
                        <div className="header-field">Role</div>
                        <div className="header-field">Status</div>
                        <div className="header-field">Experience</div>
                        <div className="field icons">Action</div>
                    </div>
                <div>
                <div className="App">
                    {
                        error ? (
                        <>Oh no, there was an error</>
                        ) : isLoading ? (
                        <>Loading...</>
                         ) : data ? (
                            <>
                        {data.data.map((listItem) => {
                            return(
                            <Entries
                                name={listItem.name}
                                empId={listItem.id}
                                joiningDate={listItem.joiningdate}
                                role={listItem.role}
                                status={listItem.status}
                                experience={listItem.experience}
                                employee={listItem}
                                handleClick={() => displayEmployee(listItem.id)}
                                />
                            )
                            })}
                            </>
                        ) : null}
                </div>
            
            </div>
                </div>
            </main>
        </div>
    )
}
export default EmployeeList;
