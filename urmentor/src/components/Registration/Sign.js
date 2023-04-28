import React from 'react';
import './SignStyles.css';
import { useState,useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import axios from 'axios';

// app.use('/admin', adminRoutes);
// function signUpButton(){
//     // signUpButton.addEventListener('click', () => {
//         container.classNameList.add("right-panel-active");
//     // });
// }
export default function Sign() {
    // const [signIn, setsignIn] = useState(false);
    // const [signUp, setsignUp] = useState(false);
    // function signInbtn() {
    //     setsignUp(true);
    // }
    // function signUpbtn() {
    //     setsignUp(false);
    // }
    const [rotate,setRotate] = useState(false);
    const [name, setName] = useState('')
    const [phoneNumber,setPhonneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [formData,setFormData] = useState([])
    const [loginData, setLoginData] = useState([])                     
    function rotation() {
        const rotateCard = () => {
        //   const cardContainer = document.querySelector('.sign-card-container') 
        //   cardContainer.classList.toggle('rotate')
          console.log("rotated");
            setRotate(!rotate);
        }
      
        // const btnSignup = document.querySelector('#sign-btn-signup') ,
        //       btnLogin = document.querySelector('#sign-btn-login')
      
        // btnSignup.addEventListener('click',rotateCard)
        // btnLogin.addEventListener('click', rotateCard)
      
        /*See passwod*/
        const seePassword =  () => {
          const seePwdIcon = document.querySelector('.see-password'),
                pwdInput = document.querySelector('.group input')
      
          seePwdIcon.addEventListener('mousedown', () => {
            pwdInput.type = 'text'
          })
      
          seePwdIcon.addEventListener('mouseup', () => {
            pwdInput.type = 'password'
          })
      
          seePwdIcon.addEventListener('mouseover', () => {
            pwdInput.type = 'password'
          })
        }
      
        seePassword()
      }
      const loginFormSubmitted = (e) => {
        e.preventDefault();
        setLoginData({email:email,password:password});
        console.log(loginData)
      }
    const registrationFormSubmitted = (e) => {
        e.preventDefault();
        setFormData((data) => [...data, {name: name,email:email,userType:userType,phoneNumber: phoneNumber,password:password}])
        console.log(formData);

        // console.log(name)
    }

    // const SignupForm = () => {
      const [signData, setSignData] = useState({
        name: '',
        email: '',
        password: '',
        userType:'',
        phoneNumber: '',
      });
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(signData,formData,loginData)
    
        try {
          const response = await axios.post('http://localhost:3000/users', signData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    
      };
    
      const handleChange = (event) => {
        setSignData({
          ...signData,
          [event.target.name]: event.target.value,
        });
      };
    // }
  return (
  
    <div className='signContainer'>
   <div className="main-wrapper">
  <div className= {rotate?" rotate sign-card-container":"sign-card-container"}>
      <div className="sign-card">
          <div className="sign-login-form">
              <div className="sign-header">Log in</div>
              <div className="sign-content">
                  <form onSubmit={loginFormSubmitted} className='login-form'>
                      <div className="input-field" >
                          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} name = "email" type="email" placeholder="Email"/>
                      </div>
                      <div className="input-field">
                          <input vlaue = {password} onChange={(e)=>{setPassword(e.target.value)}} name="password" type="password" 
                          
                          placeholder="Password"/>
                      </div>
                      <div className="input-field">
                          <button  className="sign-btn sign-btn-submit" type="submit">Log in</button>
                      </div>
                  </form>
              </div>
              <div className="sign-footer">
                  Don't have an account ?
                  <button onClick ={()=>{setRotate(!rotate) }}  className="sign-btn sign-btn-rotate" id="sign-btn-signup">Sign up</button>
              </div>
          </div> 
          <div className="signup-form">
              <div className="sign-header">Sign up</div>
              <div className="sign-content">
                  <form onSubmit={handleSubmit} className='sign-form'> 
                      <div className="input-field" >
                          <input type="text" value={signData.name} name = "name" placeholder="Full Name" onChange={handleChange} required/>
                      </div>
                      <div className="input-field select-box" >
                      

                        {/* <div className='sign-checkbox'>
                          <input type="checkbox" name = "student" placeholder="Full Name"/><label>Student</label>
                        </div>

                        <div className='sign-checkbox'>
                          <input type="checkbox" name = "mentor" placeholder="Full Name" onChange={()=> {setCheckbox()}}/><label>Mentor</label>
                        </div> */}
                          <select value={signData.userType} onChange={handleChange} className= "select-field" name= "userType" id="user-select" required>
                          <option value=""> You are ?</option>
                            <option value="student">Student</option>
                            <option value="mentor">Mentor</option>
                          </select>
                      </div>
                      <div className="input-field" >
                      {/* <label htmlFor="countryCode">Country Code:</label>
                      <select id="countryCode" >
        <option value="+1">+1 (USA)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+81">+81 (Japan)</option>
        add more options as needed
      </select> */}
                          <input value={signData.phoneNumber} onChange={handleChange} type="tel" name = "phoneNumber" placeholder="Phone Number"/>
                      </div>
                      <div className="input-field" >
                          <input value={signData.email} onChange={handleChange} type="email" name="email" placeholder="Email" required/>
                      </div>
                      <div className="input-field group">
                          <input  vlaue = {signData.password} onChange={handleChange} type="password" name="password" placeholder="Password" required/>
                          <span className="see-password">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                  <path d="M0 0h24v24H0z" fill="none"/>
                                  <path fill="#fff" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                              </svg>
                          </span>
                      </div>
                      <div className="input-field">
                          <button className="sign-btn sign-btn-submit" type="submit">Sign Up</button>
                      </div>
                  </form>
              </div>
              <div className="sign-footer">
                  <button onClick ={()=>{setRotate(!rotate) }} className="sign-btn sign-btn-rotate" id="sign-btn-login">I have an account</button>
              </div>
          </div> 
      </div> 
  </div> 
</div>
        
   {/* <div className="container1 "  id="container">
        <div className={signUp ? "moveslider slider":"slider"}></div>
        <div className="signBtn">
            <button onClick={signUpbtn} className="login">Login</button>
            <button onClick={signInbtn} className="signup">Signup</button>
        </div>
  
   
        <div className={signUp ? "form-section-move form-section" : "form-section" }>
  
          
            <div className="login-box">
                <input type="email" 
                       className="email ele" 
                       placeholder="youremail@email.com"/>
                <input type="password"
                       className="password ele" 
                      placeholder="password"/>
                <button className="clkbtn">Login</button>
            </div>
  
           
            <div className="signup-box">
                <input type="text" 
                       className="regi-name ele" 
                       placeholder="Enter your name" />
                <input type="email" 
                       className="email ele" 
                       placeholder="youremail@email.com" />
                        <input type="text" 
                       className="class ele" 
                       placeholder="Class - Target" />
                        {/* <input type="text" 
                       className="email ele" 
                       placeholder="youremail@email.com" /> *
                {/* <input type="password" 
                       className="password ele" 
                       placeholder="password" />
                <input type="password" 
                       className="password ele" 
                       placeholder="Confirm password" />
                <button className="clkbtn">Signup</button>
            </div>
        </div> *
    </div> */}
    </div>
    
  
  );
}
