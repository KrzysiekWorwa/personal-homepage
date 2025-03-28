import styled from "styled-components";
import eclipseIcon from "./eclipse.svg";

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 8px 32px;
    grid-template-columns: repeat(3, 1fr);
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 7px;
    align-items: center;

    &::before {
        content: "";
        width: 9px;
        height: 9px;
        background-image: url(${eclipseIcon});
        background-size: contain;
        background-repeat: no-repeat;
    }
`;