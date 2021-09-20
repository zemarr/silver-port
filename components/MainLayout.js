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
`

export default MainLayout