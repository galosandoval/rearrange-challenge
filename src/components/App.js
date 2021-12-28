import Display from "./Display/Display";

import { useState } from "react";
import styled from "styled-components/macro";
import { GlobalStyle } from "../styles/globalStyles";
import Controls from "./Controls/Controls";
import { storage } from "../utils/handleLocalStorage";
import { colorBackground } from "../styles/globalVariables";

const StyledApp = styled.main`
  display: flex;
  justify-content: center;
  gap: 4rem;
  height: 100vh;
  align-items: center;
  overflow: hidden;
  position: relative;
  color: ${colorBackground};
`;

function App() {
  const [sequence, setSequence] = useState(() => storage.get());

  return (
    <StyledApp>
      <GlobalStyle />
      <Display sequence={sequence} />
      <Controls sequence={sequence} setSequence={setSequence} />
    </StyledApp>
  );
}

export default App;
