import styled from "styled-components";
import { ReactComponent as GithubIconLink } from "./SvgIcons/githubIcon.svg";
import { ReactComponent as FacebookIconLink } from "./SvgIcons/facebookIcon.svg";
import { ReactComponent as LinkedinIconLink } from "./SvgIcons/linkedinIcon.svg";
import { ReactComponent as InstagramIconLink } from "./SvgIcons/instagramIcon.svg";
import { ReactComponent as ArtStationIconLink } from "./SvgIcons/artstation.svg"
import { ReactComponent as PanoeeIconLink } from "./SvgIcons/panoee.svg"

export const FooterSection = styled.footer`
    margin-top: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
}
`;

export const LetsTalk = styled.h2`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: initial;
    margin: 0%;
`;

export const Adress = styled.address`
    font-style: unset;
`;

export const EmailWrapper = styled.div`
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 12px 0;
}
`;

export const EmailLink = styled.a`
    font-size: 32px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.Link};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
}
`;

export const Info = styled.p`
    font-size: 18px;
    font-weight: 400;
    max-width: 670px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
}
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 40px 0;
        gap: 16px;
        justify-content: center;
}
    @media (max-width: ${({ theme }) => theme.breakpoints.miniMobile}px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: auto;
    justify-content: center;
    justify-items: center;
    gap: 24px;

        & > :nth-child(5) {
      grid-column: 2;
        }

        & > :nth-child(6) {
      grid-column: 3;
        } 
  }
`;

export const GithubIcon = styled(GithubIconLink)`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: transform 0.5s ease, color 0.3s ease;

        &:hover {
        color: ${({ theme }) => theme.colors.Link};
        transform: scale(1.05) rotate(360deg);
    }
`;

export const FacebookIcon = styled(FacebookIconLink)`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: transform 0.5s ease, color 0.3s ease;

        &:hover {
        color: ${({ theme }) => theme.colors.Link};
        transform: scale(1.05) rotate(360deg);
    }
`;

export const LinkedinIcon = styled(LinkedinIconLink)`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: transform 0.5s ease, color 0.3s ease;

        &:hover {
        color: ${({ theme }) => theme.colors.Link};
        transform: scale(1.05) rotate(360deg);
    }
`;

export const InstagramIcon = styled(InstagramIconLink)`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: transform 0.5s ease, color 0.3s ease;

        &:hover {
        color: ${({ theme }) => theme.colors.Link};
        transform: scale(1.05) rotate(360deg);
    }
`;

export const ArtStationIcon = styled(ArtStationIconLink)`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: transform 0.5s ease, color 0.3s ease;

        &:hover {
        color: ${({ theme }) => theme.colors.Link};
        transform: scale(1.05) rotate(360deg);
    }
`;

export const PanoeeIcon = styled(PanoeeIconLink)`
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: transform 0.5s ease, color 0.3s ease;

        &:hover {
        color: ${({ theme }) => theme.colors.Link};
        transform: scale(1.05) rotate(360deg);
    }
`;