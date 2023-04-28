import React from 'react'
import './MentorProfile.css';
import image1 from './image.png';

export default function MentorProfile() {
  return (
    <div className='mentor-profile'><div class="mentor-wrapper">

    <div class="mentor-card">
      <div class="mentor-img">
        <img src={image1} alt="Profile" width="100%" />
      </div>

      <div class="cnt">
        <div class="name">Shivay</div>
        <div class="txt">Front-end Developer from
          <strong>Hell</strong>
        </div>
        <i class="fas fa-thumbtack"></i>
        <strong>India</strong>
        <div class="mentor-card-button">
          <button class="btn-blue mentor-buttton"> Start Receiving Call </button>
          <a href='https://meet.google.com/'><button class="btn-orange mentor-buttton">Creat Gmeet</button>  </a>
        </div>
        <div class="mentor-card-inf">
          <div class="item">
            <div class="title">00</div>
            <div class="txt">Today Session</div>
          </div>

          <div class="item">
            <div class="title">00</div>
            <div class="txt">Total Sessions</div>
          </div>

          <div class="item">
            <div class="title">00</div>
            <div class="txt">Total Earnings</div>
          </div>

          <div class="item">
            <div class="title">00</div>
            <div class="txt">Rating</div>
          </div>
        </div>

        <div class="mentor-card-social">
          <a href="https://www.facebook.com/codingplayfb/" class="facebook mentor-a">
            <h5> 9-10th </h5>
            {/* <i class="fab fa-facebook-f"></i> */}
          </a>
          <a href="#" class="twitter  mentor-a">
            <h5> 11-12th </h5>
            {/* <i class="fab fa-twitter"></i> */}
          </a>
          <a href="https://www.instagram.com/codingplay.insta/" class="instagram mentor-a">
            <h5> JEE </h5>
            {/* <i class="fab fa-instagram"></i> */}
          </a>
          <a href="https://github.com/jamshidelmi" class="github mentor-a">
            <h5> NEET </h5>
            {/* <i class="fab fa-github"></i> */}
          </a>
        </div>

        

      </div>
    </div>

  </div></div>
  )
}
