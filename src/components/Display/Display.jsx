import React, { useMemo } from "react";
import { DisplayStyles, SequenceContainer } from "./DisplayStyles";

const Display = ({ sequence }) => {
  const parsedSequence = useMemo(() => sequence.split(", "), [sequence]);

  return (
    <DisplayStyles>
      <SequenceContainer>
        {parsedSequence ? parsedSequence.map((item, i) => <p key={item + i}>{item}</p>) : null}
      </SequenceContainer>
    </DisplayStyles>
  );
};

export default Display;
