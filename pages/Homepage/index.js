import styled from "styled-components"
import Particle from "../../components/Particles"

const Homepage = () => {
    return (
        <>
            <StyledHomepage>
                <div className="p-particles">
                    <Particle />
                </div>
            </StyledHomepage>
        </>
    )
}


export const StyledHomepage = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles {
        
    }
`

export default Homepage
