import styled from "styled-components"
import Image from 'next/image';

const ContactItem = ({icon, title, contact1}) => {
    return(
        <>
            <StyledContactItem>
                <div className="left-content">
                    <div>{icon}</div>
                </div>
                <div className="right-content">
                    <h6>{title}</h6>
                    <p>{contact1}</p>
                    {/* <p>{contact2}</p> */}
                </div>
            </StyledContactItem>
        </>
    );
}

export const StyledContactItem = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--sidebar-dark-color);
    margin: 1rem 0;
    display: flex;
    align-items: center;

    .left-content {
        padding: .7rem;
        margin-right: 1.5rem;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 2rem;
            padding: 0;
            margin: 0;
        }
    }

    .right-content {
        h6 {
            color: var(--white-color);
            font-size: 1rem;
            padding-bottom: .6rem;
        }

        p {
            padding: .2rem 0;
            color: inherit;
        }
    }

`

export default ContactItem