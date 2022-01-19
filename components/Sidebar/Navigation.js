import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";
import styled from "styled-components";

const Navigation = () => {
  const router = useRouter();

  return (
    <StyledNavigation>
      <div className="avatar">
        <Image
          alt=""
          src="/img/headshot-logo-blue.png"
          width="150px"
          height="150px"
          quality={100}
        />
      </div>
      <div className="nav-items">
        <Link href="/" passHref>
          <a className={router.pathname === '/' ? 'nav-item active-class' : 'nav-item'}>
            Home
          </a>
        </Link>
        <Link href="/resume" passHref>
          <a className={router.pathname === '/resume' ? 'nav-item active-class' : 'nav-item'}>
            Resume
          </a>
        </Link>
        <Link href="/projects" passHref>
          <a className={router.pathname === '/projects' ? 'nav-item active-class' : 'nav-item'}>
            Projects
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a className={router.pathname === '/contact' ? 'nav-item active-class' : 'nav-item'}>
            Contact
          </a>
        </Link>
      </div>
      <footer>
        <p>2020 My Portfolio Website</p>
      </footer>
    </StyledNavigation>
  );
};

export const StyledNavigation = styled.nav`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: solid 5px var(--border-color);

  .avatar {
    /* width: 100%; */
    overflow: hidden;
    margin-top: 2rem;
  }

  .nav-items {
    border-top: solid 1px var(--border-color);
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    width: inherit;
  }

  .active-class {
    background-color: var(--primary-color);
    transition: all 0.5s cubic-bezier(0.5,-0.14,.24,.91);
  }

  .nav-item {
    color: var(--font-light-color);
    padding: 1rem 1.3rem;
    display: block;
    width: 100%;
    text-align: center;
    position: relative;
    transition: all 0.5s cubic-bezier(0.5,-0.14,.24,.91);
    z-index: 4;
    letter-spacing: 1px;
    text-transform: uppercase;


    &:hover {
        cursor: pointer;
    }

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 50%;
        background-color: var(--primary-color);
        opacity: 0.2;
        transition: all 0.5s cubic-bezier(0.5,-0.14,.24,.91);
        z-index: 3;
        transform-origin: top;
    }

    &:hover::before {
        width: 100%;
        height: 100%;
        z-index: 3;
    }

  }

  footer {
      border-top: solid 1px var(--border-color);
      width: 100%;
    p {
        padding: 1rem 0;
        font-size: .8rem;
        display: block;
        text-align: center;
    }
  }
`;

export default Navigation;
