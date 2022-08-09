import './SideNavigation.css';
import logo from '/home/sneha/Desktop/frontend-folder/reactapp/src/images/kv-logo.png';
import list from "/home/sneha/Desktop/frontend-folder/reactapp/src/images/List.png";
import { Link, useNavigate } from 'react-router-dom';
import {removeStorage} from "../../services/utils";
import Button from '../Button';

function SideNavigation(){

    const navigate = useNavigate(); 
    const handlelogout =() =>{
      removeStorage("idToken");
      navigate("/");
    }
    return(
    <div className="sidebar">
     <Link to="/list">
        <img src={logo} alt="KeyValue Logo" className="logo" />
      </Link>
      <nav className="employee-list">
        <Link to="/list" className='atag'>
          <div className="sidebar-list">
            <img src={list} alt="Employee List" className="listimage" />
            <span className="employee-list-content">Employee List</span>
          </div>
        </Link>
      </nav>
      <div className='logoutbutton'>
        <Button id="createb" className="create" handleClick={() => handlelogout()} label="Logout"/>
      </div>
    </div>  
    )
}

export default SideNavigation