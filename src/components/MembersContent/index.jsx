import styled from "styled-components";

export const MembersContent = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.5rem;

    @media (max-width: 950px) {
        grid-template-columns: 1fr 1fr;
    }
`;