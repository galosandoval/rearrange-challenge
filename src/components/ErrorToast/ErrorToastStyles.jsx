import styled from "styled-components/macro";
import { colorSecondary } from "../../styles/globalVariables";

export const ErrorToastStyles = styled.div`
  position: absolute;
  transition: all 0.5s ease;
  opacity: ${(p) => (p.isActive ? 1 : 0)};
  transform: ${(p) => (p.isActive ? "translateX(0%)" : "translateX(20%)")};
  background-color: ${colorSecondary};
  width: 40rem;
  height: 10rem;
  top: 9rem;
  right: 2%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-evenly;
  padding: 1rem 1.5rem;

  svg {
    height: 6rem;
    width: 6rem;
    margin-right: 1rem;
  }
`;
