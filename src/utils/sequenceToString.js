import { shuffle } from "./shuffle";

export const sequenceToStringHelper = (sequence) => {
  const shuffledSequence = shuffle(sequence.split(", "));
  const sequenceToString = shuffledSequence.reduce((newSequence, item, i) => {
    const itemToAdd = item.toString();
    newSequence += itemToAdd;
    if (i !== 8) return newSequence.concat(", ");
    return newSequence;
  }, "");

  return sequenceToString;
};
