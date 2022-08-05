import { Link, useNavigate } from "react-router-dom";
import InputSelect from "../components/InputSelect";
import SideNavigation from "../components/SideNavigation";
import '../styles/EmployeeList.css'
import Entries from "../components/Entries";
import { useGetAllEmployeesQuery } from "../services/api";
const EmployeeList=()=>{

    const { data, error, isLoading } = useGetAllEmployeesQuery();
    // const empArr=data.data;

    // const navigate = useNavigate();
    // const displayEmployee = (id) => {
    //     navigate(`/list/${id}`);
    //   };
    // const empArr =[
    //     {
    //         name: 'sneha',
    //         id: 'E-433',
    //         experience:"6",
    //         status:"active",
    //         joiningDate:"21/02/2016",
    //         role:"manager",
    //     },
    //     {
    //         name: 'rachel',
    //         id: 'E-434',
    //         experience:"2",
    //         status:"inactive",
    //         joiningDate:"21/02/2019",
    //         role:"engineer",
    //     },
    //     {
    //         name: 'vishal',
    //         id: 'E-435',
    //         experience:"1",
    //         status:"probation",
    //         joiningDate:"21/02/2021",
    //         role:"hr",
    //     },
    //     {
    //         name: 'neena',
    //         id: 'E-436',
    //         experience:"3",
    //         status:"probation",
    //         joiningDate:"21/02/2018",
    //         role:"hr",
    //     },
    //     {
    //         name: 'sanjali',
    //         id: 'E-437',
    //         experience:"4",
    //         status:"active",
    //         joiningDate:"21/08/2017",
    //         role:"admin",
    //     },
    // ];
    return(
        <div>
            <SideNavigation/>
            <main>
                <div className="heading">
                    <h1>Employee List</h1>
                    <InputSelect
                        label="Filter By"
                        className="filterby"
                        options={[
                        { key: 1, value: "name", name: "Employee Name" },
                        { key: 2, value: "empId", name: "Employee ID" },
                        { key: 3, value: "joiningDate", name: "Joining Date" },
                        { key: 4, value: "role", name: "Role" },
                        { key: 5, value: "status", name: "Status" },
                        { key: 6, value: "experience", name: "Experience" },
                        ]}
                    />
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
                            // console.log("console.log",listItem.name);
                            return(
                            <Entries
                                name={listItem.name}
                                empId={listItem.id}
                                joiningDate={listItem.joiningdate}
                                role={listItem.role}
                                status={listItem.status}
                                experience={listItem.experience}
                                id={listItem.id}
                                employee={listItem}
                                handleClick={()=>{}}
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
