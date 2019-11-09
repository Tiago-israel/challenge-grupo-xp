function formatMinutes(miliseconds) {
  const date = new Date(miliseconds);
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

export default formatMinutes;
