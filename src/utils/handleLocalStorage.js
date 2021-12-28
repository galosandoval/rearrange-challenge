export const storage = {
  save: (item) => window.localStorage.setItem("sequence", JSON.stringify(item)),
  get: () => JSON.parse(window.localStorage.getItem("sequence")) || "1, 2, 3, 4, 5, 6, 7, 8, 9"
};
