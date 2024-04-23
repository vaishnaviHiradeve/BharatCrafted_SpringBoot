import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import MenuIcon from '@rsuite/icons/Menu';

const { Fragment } = require("react");

function NavBar(){
    const state=useSelector((state)=>state);
    console.log("LoggedIn ",state.loggedin)
    console.log("Cart ",state.cart) 
    return (
        <Fragment>
            <div className="clearfix"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky mb-0 " style={{top:0,zIndex:"1000"}}>

            <a href='/' ><img src={'shop.ico'} style={{width:"40px",marginRight:"22px"}} className="float-left"/></a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                    
                    <a className="nav-link" href="/"><i class="fa fa-fw fa-home" style={{margin:"5px"}}></i>BharatCrafted</a>
                    </li>
                    <li className="nav-item active " >
                    <Dropdown title="Category" icon={<MenuIcon />}  appearance="subtle">
                        <Dropdown.Menu title="Artwork">
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Men/Upper Wear">Wooden/Resin</Link></Dropdown.Item>
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Men/Bottom Wear">Metallic</Link></Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Menu title="Furnishing">
                            <Dropdown.Item> <Link className="dropdown-item" to="/cat/Women/Upper Wear">Wooden/Resin</Link></Dropdown.Item>
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Women/Bottom Wear">Metallic</Link></Dropdown.Item>
                        </Dropdown.Menu>
                        <Dropdown.Menu title="Decor">
                            <Dropdown.Item> <Link className="dropdown-item" to="/cat/Kids/Upper Wear">Wooden/Resin</Link></Dropdown.Item>
                            <Dropdown.Item><Link className="dropdown-item" to="/cat/Kids/Bottom Wear">Metallic</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </li>
                    </ul>
                    <a className="nav-link" href="/aboutus"><i style={{margin:"5px"}}></i>About Us</a>
                    <a className="nav-link" href="/contactus"><i style={{margin:"5px"}}></i>Contact Us</a>
                    <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />                    
                </div>
                </nav>
                
        </Fragment>
    )
}

export default NavBar;
