import { useState } from "react";
import { Burger, MobileMenu, Navbar, NavItem, NavLinks, NavLogo, NavWrapper, NavIcons, ContactButton } from "./styled";
import { Link } from "react-scroll";

const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar $open={isOpen}>
            <NavWrapper>
                <Link to="home" smooth={true} duration={600} offset={-120}>
                    <NavLogo />
                </Link>

                <Burger onClick={() => setIsOpen(!isOpen)}>
                    <div />
                    <div />
                    <div />

                </Burger>

                <NavLinks>
                    <NavItem to="home" smooth={true} duration={600} offset={-90}>
                        About me
                    </NavItem>
                    <NavItem to="skillset" smooth={true} duration={600} offset={-120}>
                        Skillset
                    </NavItem>
                    <NavItem to="portfolio" smooth={true} duration={800} offset={-120}>
                        Portfolio
                    </NavItem>
                    <NavItem to="3dPortfolio" smooth={true} duration={1000} offset={-120}>
                        3D projects
                    </NavItem>
                    <NavItem to="tourPortfolio" smooth={true} duration={1000} offset={-120}>
                        Virtual Tours
                    </NavItem>
                </NavLinks>
                <NavIcons>
                    <ContactButton to="address" smooth={true} duration={1200} offset={0}>
                        Contact
                    </ContactButton>
                </NavIcons>

                <MobileMenu $open={isOpen}>
                    <NavItem to="home" smooth={true} duration={600} offset={-50}>
                        About me
                    </NavItem>
                    <NavItem to="skillset" smooth={true} duration={600} offset={-350}>
                        Skillset
                    </NavItem>
                    <NavItem to="portfolio" smooth={true} duration={800} offset={-350}>
                        Portfolio
                    </NavItem>
                    <NavItem to="3dPortfolio" smooth={true} duration={1000} offset={-340}>
                        3D projects
                    </NavItem>
                    <NavItem to="tourPortfolio" smooth={true} duration={1000} offset={-340}>
                        Virtual Tours
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1000} offset={-350}>
                        Contact
                    </NavItem>
                </MobileMenu>
            </NavWrapper>
        </Navbar>
    );
};

export default NavigationBar;