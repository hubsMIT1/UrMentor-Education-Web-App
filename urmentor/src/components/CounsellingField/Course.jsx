import React from 'react';
import './Course.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import { useEffect, useState } from 'react';
import SubjectDiv from './SubjectDiv.js/SubjectDiv';
import { Link } from 'react-router-dom';
function CounCourse() {
  // this.constructor();
  useEffect(() => {
    // $(document).ready(function(){
    const course_page = document.getElementById('course_page');
    $(course_page).on('scroll', function () {

      var link = $('.course-container a.dot');
      var top = $(window).scrollTop();

      $('.sec').each(function () {
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top+100;
        if (top >= offset && top < offset + height) {
          link.removeClass('active');
          $('.course-container').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });

    });

    // })
    ;


  }, [])

  const [FixSlider, setFixSlider] = useState(false);
  function ScrollFizxed() {
    // if (window.scrollY >= 450) {
    //   setFixSlider(true);

    // } else setFixSlider(false);

  }
  window.addEventListener("scroll", ScrollFizxed);
  return (
    <>

      <div className='course-dive'>
        {/* <div class="Top">Top Content</div> */}
        <div class="crs-page-container">
          <div class="Left">
            <div className='course-container'>
              <ul >
                <li>
                  <a href="#Class-9-10th" class="dot active" data-scroll="Class-9-10th">
                    <span>Class 9th-10th</span>
                  </a>
                </li>

                <li>
                  <a href="#Class-11-12th" class="dot" data-scroll="Class-11-12th">
                    <span>Class 11th - 12th</span>
                  </a>
                </li>

                <li>
                  <a href="#iit-jee" class="dot" data-scroll="iit-jee">
                    <span>IIT JEE</span>
                  </a>
                </li>

                <li>
                  <a href="#neet" class="dot" data-scroll="neet">
                    <span>NEET</span>
                  </a>
                </li>

                <li>
                  <a href="#career-counselling" class="dot" data-scroll="career-counselling">
                    <span>Career Counselling</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div id='course_page' class="Middle">
            <div className='sec-container'>
            <h5>Class 9 to 10th</h5>
              <section class="sec subject-container" id="Class-9-10th">
               
              <Link to='/connect'> <SubjectDiv title ="NTSE" /></Link>
              <Link to='/connect' >  <SubjectDiv title ="PHYSICS"/></Link>
              <Link to='/connect' > <SubjectDiv title ="CHEMISTRY"/></Link>
              <Link to='/connect' > <SubjectDiv title ="MATH" /></Link>

              </section>
              <h5>Class 11-12th</h5>
              <section class="sec subject-container" id="Class-11-12th">
              
              <Link to='/connect' ><SubjectDiv title ="KVPY" /></Link>
              <Link to='/connect' > <SubjectDiv title ="PHYSICS"/></Link>
              <Link to='/connect' > <SubjectDiv title ="CHEMISTRY"/></Link>
              <Link to='/connect' > <SubjectDiv title ="MATH" /></Link>
              </section>
              <h5>IIT JEE</h5>
              <section class="sec subject-container" id="iit-jee">
            
              <Link to='/connect' > <SubjectDiv title ="IISC - IISER - ICAR"/></Link>

              <Link to='/connect' ><SubjectDiv title ="PHYSICS"/></Link>
              <Link to='/connect' >  <SubjectDiv title ="CHEMISTRY"/></Link>
              <Link to='/connect' > <SubjectDiv title ="MATH" /></Link>
      </section>
      <h5>NEET</h5>
              <section class="sec subject-container" id="neet"> 
              
              <Link to='/connect' > <SubjectDiv title ="PHYSICS"/></Link>
              <Link to='/connect' >  <SubjectDiv title ="CHEMISTRY"/></Link>
              <Link to='/connect' >  <SubjectDiv title ="BIOLOGY" /> </Link>
                </section>
                <h5>Career Counselling</h5>
              <section class="sec subject-container" id="career-counselling">
             
              <Link to='/connect' > <SubjectDiv title="CAREER WITH BIO" /></Link>
               <Link to='/connect' ><SubjectDiv title="CAREER WITH MATH" /></Link>
              <Link to='/connect' > <SubjectDiv title = "CAREER IN SOFTWARE "/> 
              </Link><Link to='/connect' ><SubjectDiv title = "CAREER IN RESEARCH"/> </Link>
                </section>
            </div>
          </div>
          {/* <div class="Right"></div> */}
        </div>
        {/* 
    <div className={FixSlider?"fixed-cont course-container" :"course-container "}>
</div>
 */}
      </div>
    </>
  )

}

export default CounCourse;

