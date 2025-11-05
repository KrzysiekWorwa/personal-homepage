import { FooterSection, LetsTalk, Adress, EmailWrapper, EmailLink, Info, IconsWrapper, GithubIcon, FacebookIcon, LinkedinIcon, InstagramIcon, ArtStationIcon, PanoeeIcon } from "./styled";

const Footer = () => (
    <FooterSection id="address">
        <LetsTalk>
            Let's talk!
        </LetsTalk>
        <Adress>
            <EmailWrapper>
                <EmailLink href="mailto:codify.kontakt@gmail.com" title="codify.kontakt@gmail.com">codify.kontakt@gmail.com</EmailLink>
            </EmailWrapper>
            <Info>
                I'm always excited for new challenges! Whether it’s a website, mobile app, product visualization, or a virtual tour, I specialize in turning ideas into reality. Ready to contribute and help a forward-thinking team succeed. If you’re looking for a new team member, let’s connect to discuss the next project we can build together. 🤞
            </Info>
            <IconsWrapper>
                <a href="https://github.com/KrzysiekWorwa" target="_blank" title="Github" rel="noreferrer">
                    <GithubIcon />
                </a>
                <a href="https://www.facebook.com/krzysztof.worwa/" target="_blank" title="Facebook" rel="noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/in/krzysztof-worwa-5462b8242/" target="_blank" title="Linkedin" rel="noreferrer">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/k_worwa/" target="_blank" title="Instagram" rel="noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.artstation.com/krzysiek_worwa" target="_blank" title="Artstation" rel="noreferrer">
                    <ArtStationIcon />
                </a>
                <a href="https://portfolio.panoee.com/codify.kontakt@gmail.com" target="_blank" title="Panoee" rel="noreferrer">
                    <PanoeeIcon />
                </a>
            </IconsWrapper>
        </Adress>
    </FooterSection>
);

export default Footer;