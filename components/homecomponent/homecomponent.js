import styled from "styled-components"
import Link from 'next/link'
import Particle from "../Particles"
import TwitterIcon from "@material-ui/icons/Twitter"
import GithubIcon from "@material-ui/icons/Github"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Title from "../Title"

const HomeComponent = () => {
    return (
        <>
            <StyledHomepage>
                <div className="p-particles">
                    <Particle />
                </div>
                <div className="typography">
                    <p className="greeting">Ayika Chukwudalu</p>
                    <Title title={"Frontend Engineer,"} span={"Frontend . . ."} />
                    {/* <h1>Hi I'm <span>Josemaria,</span></h1> */}
                    <p>Deserunt ullamco nulla duis consequat irure ullamco. Tempor elit enim laborum
                        id velit reprehenderit. Consectetur irure est enim ullamco commodo ipsum exercitation
                        veniam aliqua. Nostrud duis nisi amet cupidatat occaecat enim ea. Do sint tempor ipsum
                        sint. Tempor ex reprehenderit laboris ipsum ex exercitation sint in culpa in.
                    </p>
                    <div className="icons">
                        <Link href="https://www.twitter.com/iamzemar" passHref={true}>
                            <a target="_blank" className="icon i-twitter">
                                <TwitterIcon />
                            </a>
                        </Link>
                        <Link href="https://www.github.com/zemarr" passHref={true}>
                            <a target="_blank" className="icon i-github">
                                <GithubIcon />
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/chukwudalu/" passHref={true}>
                            <a target="_blank" className="icon i-linkedin">
                                <LinkedInIcon />
                            </a>
                        </Link>
                    </div>
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
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        #tsparticles {
            height: 100%;
        }
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .greeting {
            text-align: left;
            font-size: 1.5rem;
            color: var(--primary-color);
            text-transform: uppercase;
        }

        h3 {
            font-size: 3.5rem;
            color: var(--white-color);
            text-align: left;
            font-weight: 500;

            span {
                font-size: inherit;
                color: var(--primary-color);
            }
        }

        h2 {
            width: fit-content;
            margin-bottom: 4rem;
        }

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: solid 2px var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                &:hover {
                    cursor: pointer;
                    border: solid 2px var(--primary-color);
                    color: var(--primary-color);
                    transition: all .4s ease-in-out;
                }
                
                svg {
                    margin: .5rem;
                }
            }
        }
    }

    
`

export default HomeComponent
