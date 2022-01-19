import React from "react";
import styled from "styled-components";
import MainLayout from "../MainLayout";
import ProgressBar from "./progressbar";

const Skills = () => {
  return (
    <StyledSkills>
      <div className="skills">
        <ProgressBar title={'HTML5'} width={'90%'} text={'90%'} />
        <ProgressBar title={'CSS3'} width={'90%'} text={'90%'} />
        <ProgressBar title={'TAILWINDCSS'} width={'90%'} text={'90%'} />
        <ProgressBar title={'JAVASCRIPT'} width={'75%'} text={'75%'} />
        <ProgressBar title={'TYPESCRIPT'} width={'50%'} text={'50%'} />
        <ProgressBar title={'REACT'} width={'85%'} text={'85%'} />
        <ProgressBar title={'ANGULAR'} width={'50%'} text={'50%'} />
        <ProgressBar title={'VUE'} width={'70%'} text={'70%'} />
      </div>
    </StyledSkills>
  );
};

export const StyledSkills = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`;

export default Skills;
