import { StyledTitle } from "../styled-components/styled-title"

const Title = ({title, span}) => {
    return(
        <>
            <StyledTitle>
                <h2>{title} <span>{span}</span></h2>
            </StyledTitle>
        </>
    )
}

export default Title