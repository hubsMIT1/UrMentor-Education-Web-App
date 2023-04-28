// import './components/Registration/SignStyles.css';
import Sign from './components/Registration/Sign';
import { useState } from 'react';
import UserProfile from './components/userProfile/UserProfile'
import { BrowserRouter as Router, Switch, Route, Link, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import './components/NavbarStyles.css';
import Footer  from './components/footer/Footer';
import Slider from './components/Slider/Slider';
import Course from './components/CounsellingField/Course';
import React, {Component} from 'react';
import ChatApp from './components/Chat/App';
// "start": "react-scripts start",
import MentorProfile from './components/MentorProfile/MentorProfile';
import Student from './components/Student/Student';
import History from './components/History/History';
import MentorSection from './components/MentorList/MentorSection'
import TimeSlots from './components/TimeSlots/Times'
import Slots from './components/MentorList/FillSlots'
class App extends React.Component {
  
  render () {
    // const [changes, setchange] = useState(true);
  
  return (
    <div className="App"  >
       <Router>
        <div className='wrapper'>
          <header >
            <Navbar  />
          </header> 
          <main>
            <Routes>
            <Route  path='/'
                element={<>
                <div className='slider-page'>
                <Slider />  
                </div>
                <Course /> 
                </>
                }
              />
              <Route exact path='/login'
                element={<Sign />}
              />

              <Route exact path='/profile'
                element={ <div ><UserProfile  /> </div>}
              />
              <Route exact path = '/connect' element = { <TimeSlots />} />
              <Route exact path='/slots' element ={ <MentorSection />} />
              <Route exact path='/mentor' element ={ <MentorProfile />} />
              <Route exact path='/student' element={<Student />} />
              <Route exact path='/history' element={<History />} />
              <Route exact path='/chooseSlots' element={<Slots />} />
              {/* <Route exact path='/*' element={<Navigate to='/'/>} /> */}
            </Routes>
          </main>

          <footer>
           <Footer />
          </footer>
        </div>

      </Router>

   </div>
  );
  }
}
// import { faRandom } from '@fortawesome/free-solid-svg-icons';

export default App;
