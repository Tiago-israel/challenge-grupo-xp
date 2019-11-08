function formatMinutes(miliseconds) {
  const date = new Date(miliseconds);
  return `${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
}

export default formatMinutes;
