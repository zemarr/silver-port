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
        <ProgressBar title={'JAVASCRIPT'} width={'70%'} text={'70%'} />
        <ProgressBar title={'TYPESCRIPT'} width={'60%'} text={'60%'} />
        <ProgressBar title={'REACT'} width={'85%'} text={'85%'} />
        <ProgressBar title={'ANGULAR'} width={'70%'} text={'70%'} />
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
