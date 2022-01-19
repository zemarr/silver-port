import styled from "styled-components"

const MainLayout = ({ children }) => {
    return (
        <>
            <Layout>
                {children}
            </Layout>
        </>
    )
}

const Layout = styled.div`
    padding: 4rem;
`

export const InnerLayout = styled.div`
    /* background-color: green; */
    margin-top: 150px;
    padding-bottom: 50px;

    @media screen and (max-width: 768px) {
        display: ${({tablet}) => (tablet ? '0' : '16.3rem')};
    }
`

export default MainLayout