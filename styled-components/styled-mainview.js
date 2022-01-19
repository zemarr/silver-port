import styled from "styled-components";

export const StyledMainContent = styled.section`
    position: relative;
    margin-left: ${({tablet}) => (tablet ? '16.3rem' : '0')};
    min-height: 100vh;

    @media screen and (max-width: 1024px) {
        margin-left: ${({tablet}) => (tablet ? '0' : '16.3rem')};
    }

    .lines {
        position: absolute;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        .line-1, .line-2, .line-3, .line-4 {
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
        }
    }
`