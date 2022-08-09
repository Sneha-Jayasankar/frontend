import '../styles/SideNavigation.css';
import logo from '../images/kv-logo.png';
import list from "../images/List.png";
import { Link } from 'react-router-dom';

function SideNavigation(){
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
    </div>
    )
}

export default SideNavigation