import React from 'react';
import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar
        fluid
        className="pt-6 pb-6"
      >
        <NavbarBrand href="/">
          <img
            src="https://coolors.co/assets/img/logo.svg"
            className="mr-3 h-4 sm:h-5"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {/* Flowbite React */}
          </span>
        </NavbarBrand>
        <div className="flex md:order-2 gap-3">
          <Button color="blue">Get started</Button>
          <DarkThemeToggle />
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink
            as={Link}
            to="/"
            active
          >
            Home
          </NavbarLink>
          <NavbarLink
            as={Link}
            to="about"
          >
            About
          </NavbarLink>
          <NavbarLink
            as={Link}
            to="contact"
          >
            Contact
          </NavbarLink>
          <NavbarLink
            as={Link}
            to="create"
          >
            Create
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default Header;
