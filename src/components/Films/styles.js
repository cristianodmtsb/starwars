import styled from "styled-components";

export const Section = styled.section`
  width: 980px;
  margin: 0 auto;
  max-width: 100%;
  padding: 1rem 1rem;
  background-color: ${(props) => props.bgColor || "black"};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #ffe300;
  display: block;
  padding: 1rem 0;
  margin-bottom: 1.5rem;
`;

export const Films = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 960px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  background-color: #cccccc;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
`;
