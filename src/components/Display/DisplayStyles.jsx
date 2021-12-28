import styled from "styled-components/macro";
import { colorPrimary } from "../../styles/globalVariables";

export const DisplayStyles = styled.section`
  flex: 0 0 50%;
  display: grid;
  place-items: center;
`;

export const SequenceContainer = styled.div`
  background-color: ${colorPrimary};
  height: 60rem;
  width: 60rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: [first] 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  font-size: 4rem;
`;
