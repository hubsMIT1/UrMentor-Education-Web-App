import React, { Component } from 'react';
// import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import sign from './Registration/Sign';
import { Link } from 'react-router-dom';
import ProfileDrop from './dropdown/ProfileDrop';
import logo from '../logo.png';
import { useState,useEffect,useRef} from 'react';

function Navbar() {

  const [clicked, setstate] = useState(false);
  
//  const handleTrue = () => {
//       setstate(!clicked);
//  }
 const cancelDrop = () =>{
   if(clicked) {setstate(false)};
 }
 let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setstate(false);
        // console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  },[]);

//   state = { clicked: false };
//   handleTrue = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };
//  cancelDrop = () =>{
//     this.state.clicked === true ? this.setState({clicked: false}) : this.setState({clicked: true}) ;
//  }

//  useEffect(() => {
//   setstate(false);
//   // }
//    return () => {
 

  // useEffect(() => {
  //   let handler = (e)=>{
  //     if(!menuRef.current.contains(e.target)){
  //       setOpen(false);
  //       // console.log(menuRef.current);
  //     }      
  //   };

  //   document.addEventListener("mousedown", handler);
    

  //   return() =>{
  //     document.removeEventListener("mousedown", handler);
  //   }

  // });
  // componentDidMount(props){
    // let menuRef = useRef();
      // useEffect(() => {
        // (window).addEventListener("mousedown",()=>{
        //   console.log("clicker",this.state.clicked)
         
        //   if(this.state.clicked===true){
        //     this.setState({clicked:false})
        //   }
        //   // this.state.clicked === true ? this.setState({clicked: false}) :;
        //  });
      // }, [])
    //      return()=>{
    //       if(this.state.clicked===true){
    //         this.setState({clicked:false})
    //       }

    //      }
   
    // } 
  
  
 
   
 
  // function handleFalse(){
  //       setstate(false);
  // }
 
    return (
      <>
        <div className='nav1' ref={menuRef}>
          <h1 className='logo'>
            <Link className='logocolor text-decoration-none' to='/'>
              <div className='logo-image'>
                <img className='logo-img' src={logo} alt='urmentor' />  </div>
              <div className="logo-name"> UrMentor</div>
            </Link></h1>
          <div id="navbar1">
            <ul id="navbar12" className={clicked ? "#navbar12 navactive" : "#navbar12"}  >
              <li onClick={cancelDrop}><Link className="text-decoration-none" to='/'>Home</Link></li>
              <li onClick={cancelDrop} ><Link className="text-decoration-none"  to='/student' >Student</Link></li>
              <li onClick={cancelDrop}><Link className="text-decoration-none" to='/history'>Call-History</Link></li>
              <li onClick={cancelDrop}><Link to='/mentor' className="text-decoration-none">Mentor</Link></li>
              <li onClick={cancelDrop}><Link to='/chooseslots' className="text-decoration-none">Slots</Link></li>
              <li onClick={cancelDrop}><Link className="text-decoration-none" to='/login'>Sign Up</Link></li>
              {/* <div className="menu-container">
                  <div className="menu-trigger"></div>
                </div> */}

            </ul>
            
          </div>
          <div  className='nav-mobile-profile'  > 
          <div id='mobile' className='mobile'  >



            <FontAwesomeIcon onClick={()=>{setstate(!clicked)}} className='barsIcon' icon={clicked ? faTimes : faBars} fixedWidth />

            {/* <FontAwesomeIcon  onClick= {handleFalse()} icon={faTimes} fixedWidth /> */}


          </div>
          <div className='account-nav-box'>
              
                 <ProfileDrop />
              
              
            </div>
            </div>
        </div>
      </>
    );
  
}
export default Navbar; 