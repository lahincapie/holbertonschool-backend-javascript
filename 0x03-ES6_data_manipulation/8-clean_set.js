const cleanSet = (set, startString) => {
  if (startString.length === 0) return '';
  const sliceStart = startString.length;
  const mySet = [...set]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(sliceStart));
  return mySet.join('-');
};

export default cleanSet;
