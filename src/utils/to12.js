function to12(num) {
  if (num > 24 || num < 0) {
    throw new Error("Valid numbers are integers between 0 to 24");
  }
  return `${num % 12 === 0 ? "12" : num % 12}${num >= 12 ? "pm" : "am"}`;
}

export default to12;
