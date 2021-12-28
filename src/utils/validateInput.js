export const validateInput = (string) => {
  const sequence = string.split("");
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === "," && sequence[i + 1] === " ") {
      count++;
    }
  }

  if (count === 8) return true;
  return false;
};
