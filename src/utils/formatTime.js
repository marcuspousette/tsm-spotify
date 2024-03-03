export const formatTime = (seconds) => {
  const totalSeconds = Math.floor(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  const formattedHours = hours > 0 ? `${hours}:` : '';
  const formattedMinutes = hours > 0 && minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  const formattedSeconds = remainingSeconds > 9 ? remainingSeconds : `0${remainingSeconds}`;

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};
