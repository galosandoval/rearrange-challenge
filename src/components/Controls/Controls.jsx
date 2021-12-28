import React, { useState } from "react";
import { checkSVG, randomSVG, refreshSVG, saveSVG } from "../../assets/svgs";
import { colorSecondary, colorTertiary } from "../../styles/globalVariables";
import { storage } from "../../utils/handleLocalStorage";
import { shuffle } from "../../utils/shuffle";
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
      setIsError(false);
      storage.save(sequence);
      setHasSaved(true);
      setTimeout(() => {
        setHasSaved(false);
      }, 3000);
    } else setIsError(true);
  };

  const handleShuffle = () => {
    if (validateInput(textBox)) {
      setIsError(false);

      const shuffledSequence = shuffle(textBox.split(", "));
      const sequenceToString = shuffledSequence.reduce((newSequence, item, i) => {
        const itemToAdd = item.toString();
        newSequence += itemToAdd;
        if (i !== 8) return newSequence.concat(", ");
        return newSequence;
      }, "");
      setTextBox(sequenceToString);
    } else setIsError(true);
  };

  return (
    <ControlsStyles>
      <Button onClick={handleShuffle}>{randomSVG}</Button>
      <TextBox value={textBox} onChange={(event) => setTextBox(event.target.value)} />
      <Button onClick={handleChangeSequence} bg={colorSecondary}>
        {refreshSVG}
      </Button>
      <Button onClick={handleSaveSequence} bg={colorTertiary}>
        {hasSaved ? checkSVG : saveSVG}
      </Button>
      <ErrorToast isActive={isError} setIsError={setIsError} />
    </ControlsStyles>
  );
};

export default Controls;