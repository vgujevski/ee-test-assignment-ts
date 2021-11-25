export const getNumericValue = (string: string): number => {
  return parseInt(string.replace(/^\D+/g, "").replace("€", ""));
};
