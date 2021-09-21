import styled from "styled-components"
import Image from 'next/image';

const ContactItem = ({icon, title, contact1}) => {
    return(
        <>
            <StyledContactItem>
                <div className="left-content">
                    {/* <Image src={icon} alt="" width={50} height={50} /> */}
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
    background-color: var(--background-dark-grey);
`

export default ContactItem