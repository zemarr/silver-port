import styled from "styled-components";

export const StyledSidebar = styled.div`
    position: fixed;
    overflow: hidden;
    width: ${({innerWidth}) => (innerWidth ? '16.3rem' : '0')};
    height: 100vh;
    background-color: var(--background-dark-color);

    @media screen and (max-width: 1024px) {
        width: ${({innerWidth}) => (innerWidth ? '0' : '16.3rem')}
    }
`