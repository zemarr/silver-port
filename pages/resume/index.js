import MainLayout from "../../components/MainLayout";
import { StyledMainContent } from "../../styled-components/styled-mainview";
import Head from "next/head";
import ResumeComponent from "../../components/resumecomponent/resumecomponent";
import Sidebar from "../../components/Sidebar/Sidebar";

const Resume = () => {
  return (
    <>
      <Sidebar />
      <MainLayout>
        <StyledMainContent className="main-content">
          <ResumeComponent />
        </StyledMainContent>
      </MainLayout>
    </>
  );
};

export default Resume;
