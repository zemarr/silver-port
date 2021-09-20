import styled from "styled-components"
import { InnerLayout } from "../MainLayout"
import Title from "../Title"
import Button from '../button/button'

const ContactComponent = () => {
    return (
        <>
            <StyledContact>
                <div className="heading">
                    <Title title={"Contact"} span={"Contact"} />
                </div>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get in touch</h4>
                        </div>
                        <form className="contactform">
                            <div className='form-field'>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className='form-field'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className='form-field'>
                                <label htmlFor="text-area">Dropzone</label>
                                <textarea id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className='form-field'>
                                <Button title={'Send Message'} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content"></div>
                </InnerLayout>
            </StyledContact>
        </>
    )
}


const StyledContact = styled.div`
    .heading {
        margin-bottom: 4rem;
    }

    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .contact-title {
            h4 {
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }

        .contactform {
            width: 100%;
            .form-field {
                width: 100%;
                margin-top: 2rem;
                position: relative;
                label {
                    position: absolute;
                    left: 10px;
                    top: -.7rem;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input {
                    width: 100%;
                    border: solid 1px var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    color: inherit;
                    font-size: 1rem;
                    font-family: monospace;
                }
            }

            textarea {
                background-color: transparent;
                border: solid 1px var(--border-color);
                outline: none;
                color: inherit;
                width: 100%;
                padding: .8rem 1rem;
                font-size: 1rem;
                font-family: monospace;
            }
        }
    }
`

export default ContactComponent