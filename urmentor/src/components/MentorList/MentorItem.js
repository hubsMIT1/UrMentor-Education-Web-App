import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 100px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    color:black;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 60px;
    }
  }
`;

export default function ProjectItem({
  // img = "ProjectImg",
  img ="",
  name = 'Project Name',
  rating = '3',
  sub = "physicss",
  exam = "KVPY",
  slots = "slots",
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{name}</h3>
          <p> Rating: {rating} </p>
          <p> <strong> Subject : </strong> {sub[0] + "," +sub[1]} </p>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}