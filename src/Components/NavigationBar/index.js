import { useState, useRef, useEffect } from "react";
import { Burger, MobileMenu, Navbar, NavItem, NavLinks, NavLogo, NavWrapper, NavIcons, ContactButton } from "./styled";
import { Link } from "react-scroll";

const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Navbar $open={isOpen}>
            <NavWrapper>
                <Link to="home" smooth={true} duration={600} offset={-120}>
                    <NavLogo />
                </Link>

                <Burger ref={burgerRef}  $open={isOpen}onClick={() => setIsOpen(!isOpen)}>
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

                <MobileMenu ref={menuRef} $open={isOpen}>
                    <NavItem to="home" smooth={true} duration={600} offset={-50} onClick={handleLinkClick}>
                        About me
                    </NavItem>
                    <NavItem to="skillset" smooth={true} duration={600} offset={-80} onClick={handleLinkClick}>
                        Skillset
                    </NavItem>
                    <NavItem to="portfolio" smooth={true} duration={800} offset={-80} onClick={handleLinkClick}>
                        Portfolio
                    </NavItem>
                    <NavItem to="3dPortfolio" smooth={true} duration={1000} offset={-80} onClick={handleLinkClick}>
                        3D projects
                    </NavItem>
                    <NavItem to="tourPortfolio" smooth={true} duration={1000} offset={-80} onClick={handleLinkClick}>
                        Virtual Tours
                    </NavItem>
                    <NavItem to="address" smooth={true} duration={1000} offset={-80} onClick={handleLinkClick}>
                        Contact
                    </NavItem>
                </MobileMenu>
            </NavWrapper>
        </Navbar>
    );
};

export default NavigationBar;