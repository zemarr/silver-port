import styled from "styled-components";

export const StyledTitle = styled.div`
    position: relative;

    h2 {
        color: var(--white-color);
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        z-index: 2;
        padding-bottom: .15rem;

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 5.5rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            left: 0;
        }
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.7rem;
            height: .33rem;
            background-color: var(--primary-color);
            left: 0;
            border-radius: 14px;
        }

        span {
            display: inline-block;
            font-weight: 600;
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 20%;
            z-index: -1;
        }
    }
`