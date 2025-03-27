import styled from "styled-components";

export const Container = styled.div`
max-width: 1089px;
margin: auto;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {max-width: 90%}
`;