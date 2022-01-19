import ContactComponent from "../../components/contactcomponent/contactcomponent"
import MainLayout from "../../components/MainLayout"
import Sidebar from "../../components/Sidebar/Sidebar"
import { StyledMainContent } from "../../styled-components/styled-mainview"

const ContactPage = () => {
    return (
        <>
            <Sidebar />
            <MainLayout>
                <StyledMainContent tablet className="main-content">
                    <ContactComponent />
                </StyledMainContent>
            </MainLayout>
        </>
    )
}

export default ContactPage