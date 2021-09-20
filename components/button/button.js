import styled from "styled-components"

const Button = ({ title }) => {
    return (
        <>
            <StyledButton>{title}</StyledButton>
        </>
    )
}


export const StyledButton = styled.button`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    font-family: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0.2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: 0.7;
    }
    &:hover::after {
        width: 100%;
        background-color: var(--white-color);
    }
`

export default Button