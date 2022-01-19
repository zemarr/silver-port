import React from 'react'
import { InnerLayout } from '../MainLayout'
import { SmallTitle } from '../Title'
import { StyledResume } from './resumecomponent'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import styled from "styled-components";

const Resume = () => {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <StyledResume>
            <InnerLayout>
                <div className={"small-title"}>
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className={"resume-content"}>
                    <ExperienceCard
                        year={"January 2022 - Present"}
                        title={"Social media Manager/Content Creator"}
                        subTitle={"Tribes Of Ladies"}
                        text={"There are many variations of passages of Lorem Ipsum available, " +
                        "but the majority have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going " +
                        "to use a passage of Lorem Ipsum, you have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going"} />
                    <ExperienceCard
                        year={"November 2021 - Present"}
                        title={"Software Engineer"}
                        subTitle={"Kinfolk Venture Capital"}
                        text={"There are many variations of passages of Lorem Ipsum available, " +
                        "but the majority have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going " +
                        "to use a passage of Lorem Ipsum, you have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going"} />
                    <ExperienceCard
                        year={"June 2021 - Nov 2021"}
                        title={"Frontend Engineer"}
                        subTitle={"Quabbly"}
                        text={"There are many variations of passages of Lorem Ipsum available, " +
                        "but the majority have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going " +
                        "to use a passage of Lorem Ipsum, you have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going"} />
                    <ExperienceCard
                        year={"Mar 2019 - April 2020"}
                        title={"Frontend Web Developer"}
                        subTitle={"Stutern"}
                        text={"There are many variations of passages of Lorem Ipsum available, " +
                        "but the majority have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going " +
                        "to use a passage of Lorem Ipsum, you have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going"} />
                    <ExperienceCard
                        year={"July 2018 - Jan 2019"}
                        title={"Frontend Web Development Bootcamp"}
                        subTitle={"Stutern"}
                        text={"There are many variations of passages of Lorem Ipsum available, " +
                        "but the majority have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going " +
                        "to use a passage of Lorem Ipsum, you have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going"} />
                    <ExperienceCard
                        year={"2017 - 2018"}
                        title={"Social Media Manager (Youth Service)"}
                        subTitle={"Rayan Media"}
                        text={"There are many variations of passages of Lorem Ipsum available, " +
                        "but the majority have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going " +
                        "to use a passage of Lorem Ipsum, you have suffered alteration in some form, by injected humour, " +
                        "or randomised words which don't look even slightly believable. If you are going"} />
                </div>
            </InnerLayout>

        </StyledResume>
    )
}

const ExperienceCard = ({year, title, subTitle, text}) => {
    return (
        <>
            <StyledExperienceCard>
                <div className={"left-content"}>
                    <p>{year}</p>
                </div>
                <div className={"right-content"}>
                    <h5>{title}</h5>
                    <h6>{subTitle}</h6>
                    <p>{text}</p>
                </div>
            </StyledExperienceCard>
        </>
    )
}

const StyledExperienceCard = styled.div`
    display: flex;
    &:not(:last-child) {
        padding-bottom: 3rem;
    }
    
    .left-content {
        width: 30%;
        padding-left: 20px;
        
        p {
            display: inline-block !important;
        }
    }
    
    .right-content {
        width: -webkit-fill-available;
        width: fit-content;
        position: relative;
        padding-left: 10%;
        
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 15px;
            width: .5rem;
            height: 2px;
            background-color: var(--border-color);
            
        }
        
        h5 {
            color: var(--primary-color);
            font-size: 1.5rem;
            padding-bottom: .4rem;
        }
        
        h6 {
            padding-bottom: .6rem;
            font-size: 1.3rem;
        }
    }
`

export default Resume
