const colors = [
  "#FBF6E9",
  "#E3F0AF",
  "#D9EAFD",
  "#FFCCE1",
  "#CDC1FF",
  "#BFECFF",
  "#B692C2",
];
export const avtarColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
