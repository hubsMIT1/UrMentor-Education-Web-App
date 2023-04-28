// import logo from './logo.svg';
// import user from '../src/img/user.png';
// import edit from '../src/img/edit.png';
// import inbox from '../src/img/envelope.png';
// import settings from '../src/img/settings.png';
// import help from '../src/img/question.png';
// import logout from '../src/img/log-out.png';
import { set } from 'mongoose';
import './profileDrop.css';
import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
var opens = false;
function ProfileDrop() {
    let user,edit,inbox,logo,settings,help,logout;
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        // console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  },[]);

  return (
    <div className="dropdown-App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}/>
        </div>

        <div className={`dropdown-menu1 ${open? 'activeDrop' : 'inactiveDrop'}`} >
          <h4 className='profile-name'>Shivay<br/><span>Coder-Devloper-Nthng</span></h4>
          <ul>
          <li onClick={()=>{setOpen(!open)}}  className = 'dropdownItems'>
      <img src={edit}/>
      <Link className="text-decoration-none dropdowmitems-link" to='/profile'> Edit Profile </Link>
    </li>
    <li onClick={()=>{setOpen(!open)}} className = 'dropdownItems'>
      <img src={edit}/>
      <Link className="text-decoration-none dropdowmitems-link" to='/'> Logout </Link>
    </li>

            {/* <DropdownItem img = {user} text = {" Profile"}/> */}
            {/* <DropdownItem img = {edit} text = {"Edit Profile"}/> */}
            {/* <DropdownItem img = {inbox} text = {"Inbox"}/> */}
            {/* <DropdownItem img = {settings} text = {"Settings"}/> */}
            {/* <DropdownItem img = {help} text = {"Helps"}/> */}
            {/* <DropdownItem img = {logout} text = {"Logout"}  setfxn={open}/> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

// function DropdownItem(props){
//   return(
    
    

//     <>
//     <li  className = 'dropdownItems'>
//       <img src={props.img}/>
//       <Link className="text-decoration-none dropdowmitems-link" to={props.text==='Edit Profile' ? '/profile':'/'}> {props.text} </Link>
//     </li>
//     </>
      
    
//   );
// }

export default ProfileDrop ;