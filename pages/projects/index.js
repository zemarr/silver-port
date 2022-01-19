import React from 'react'
import MainLayout from '../../components/MainLayout'
import ProjectsComponent from '../../components/Projectscomponent/Projectscomponent'
import Sidebar from '../../components/Sidebar/Sidebar'
import { StyledMainContent } from '../../styled-components/styled-mainview'

const Projects = () => {
    return (
        <>
            <Sidebar />
            <MainLayout>
                <StyledMainContent tablet className='main-content'>
                    <ProjectsComponent />
                </StyledMainContent>
            </MainLayout> 
        </>
    )
}

export default Projects
