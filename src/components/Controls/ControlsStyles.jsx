import styled from "styled-components/macro";
import { colorBackground, colorPrimary, colorSecondary } from "../../styles/globalVariables";

export const ControlsStyles = styled.section`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 20rem;
  height: 6rem;
  background-color: ${(p) => (p.bg ? p.bg : colorPrimary)};
  border-radius: 5px;
  font-size: 2rem;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colorPrimary};
    color: ${(p) => (p.bg ? p.bg : colorBackground)};
  }
`;

export const TextBox = styled.textarea`
  height: 22rem;
  width: 20rem;
  background-color: ${colorPrimary};
  border-radius: 5px;
  font-size: 4rem;
  text-align: center;
  padding: 3rem;
`;

export const Validation = styled.p`
  color: ${colorSecondary};
`;
