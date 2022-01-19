import { Tablet } from "@material-ui/icons"
import GithubIcon from "@material-ui/icons/GitHub"
import styled from "styled-components"
// import LinkedIn from "@material-ui/icons/LinkedIn"
// import Twitter from "@material-ui/icons/Twitter"

function Menu({ menuItem }) {
    return (
        <StyledMenuItems>
            {
                menuItem.map((item) => {
                    return (
                        <div className='grid-item' key={item.id}>
                            <div className='portfolio-content'>
                                <div className='portfolio-image'>
                                    <img src={item.image} alt='' />
                                </div>
                                <ul>
                                    <li>
                                        <a href={item.demo}>
                                            <Tablet />
                                        </a>
                                        
                                    </li>
                                    {item.code ? (
                                        <li>
                                            <a href={item.code}>
                                                <GithubIcon />
                                            </a>
                                        </li>
                                    ) : null}
                                </ul>
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </StyledMenuItems>
    )
}

const StyledMenuItems = styled.div`

`

export default Menu
