import {
  StyledSmallTitle,
  StyledTitle,
} from "../styled-components/styled-title";

const Title = ({ title, span }) => {
  return (
    <>
      <StyledTitle>
        <h2>
          {title} <span>{span}</span>
        </h2>
      </StyledTitle>
    </>
  );
};

export const SmallTitle = ({icon, title}) => {
  return (
    <StyledSmallTitle>
      <p>{icon}</p>
      <h4>{title}</h4>
    </StyledSmallTitle>
  );
};

export default Title;
