import styled from "styled-components"
import MainLayout from "../MainLayout"
// import Particle from "../Particles"
import Title from "../Title"

const ResumeComponent = () => {
    return (
        <>
            <StyledResume>
                <Title title={'Resume'} span={'Resume'} />
            </StyledResume>
        </>
    )
}


export const StyledResume = styled.main`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        #tsparticles {
            height: 100%;
        }
    }
`

export default ResumeComponent