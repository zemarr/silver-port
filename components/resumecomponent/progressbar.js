import React from "react";
import styled from "styled-components";

const ProgressBar = ({ title, width, text }) => {
  return (
    <>
      <StyledProgressBar>
        <h6>{title}</h6>
        <div className="progress-bar">
          <p>{text}</p>
          <div className="progress">
            <span style={{ width: width }}></span>
          </div>
        </div>
      </StyledProgressBar>
    </>
  );
};

const StyledProgressBar = styled.section`
    .progress-bar {
        display: flex;
        align-items: center;

        p {
            margin-right: 1rem;
        }

        .progress {
            position: relative;
            width: 100%;
            height: 0.4rem;
            background-color: var(--border-color);

            span {
                background-color: var(--primary-color);
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
            }
        }
    }
`;

export default ProgressBar;
