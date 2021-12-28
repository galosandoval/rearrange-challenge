import React, { useState } from "react";
import { checkSVG, randomSVG, refreshSVG, saveSVG } from "../../assets/svgs";
import { colorSecondary, colorTertiary } from "../../styles/globalVariables";
import { storage } from "../../utils/handleLocalStorage";
import { sequenceToStringHelper } from "../../utils/sequenceToString";
import { validateInput } from "../../utils/validateInput";
import ErrorToast from "../ErrorToast/ErrorToast";
import { Button, ControlsStyles, TextBox } from "./ControlsStyles";

const Controls = ({ setSequence, sequence }) => {
  const [textBox, setTextBox] = useState(() => storage.get());
  const [isError, setIsError] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  const handleChangeSequence = () => {
    if (validateInput(textBox)) {
      setIsError(false);

      setSequence(textBox);
    } else setIsError(true);
  };

  const handleSaveSequence = () => {
    if (validateInput(sequence)) {
      storage.save(sequence);

      setIsError(false);
      setHasSaved(true);

      setTimeout(() => {
        setHasSaved(false);
      }, 3000);
    } else setIsError(true);
  };

  const handleShuffle = () => {
    if (validateInput(textBox)) {
      setIsError(false);

      const sequenceToString = sequenceToStringHelper(textBox);

      setTextBox(sequenceToString);
    } else setIsError(true);
  };

  return (
    <ControlsStyles>
      <Button aria-label="random" onClick={handleShuffle}>
        {randomSVG}
      </Button>
      <TextBox value={textBox} onChange={(event) => setTextBox(event.target.value)} />
      <Button aria-label="shuffle" onClick={handleChangeSequence} bg={colorSecondary}>
        {refreshSVG}
      </Button>
      <Button aria-label="save" onClick={handleSaveSequence} bg={colorTertiary}>
        {hasSaved ? checkSVG : saveSVG}
      </Button>
      <ErrorToast isActive={isError} setIsError={setIsError} />
    </ControlsStyles>
  );
};

export default Controls;
