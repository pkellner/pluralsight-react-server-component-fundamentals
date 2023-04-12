export default function AppShowSun({ isoDateString }) {
  const date = new Date(isoDateString);

  function getMinuteOffsetIntoDay(date) {
    return date.getHours() * 60 + date.getMinutes();
  }
  
  function getSunBrightness(minuteOffset) {
    const noonMinute = 12 * 60;
    if (minuteOffset >= 7 * 60 && minuteOffset < 18 * 60) {
      const minuteDiff = Math.abs(minuteOffset - noonMinute);
      const brightness = 1 - minuteDiff / noonMinute;
      return 100.0 - brightness * 100.0;
    }
    return 100.0;
  }

  const style = {
    filter: `grayscale(${getSunBrightness(getMinuteOffsetIntoDay(date))}%)`,
  };

  return (
    <div>
      {getMinuteOffsetIntoDay(date)}
      <div>
        <img src="./images/sun.png" style={style} />
        {getSunBrightness(getMinuteOffsetIntoDay(date))}
      </div>
    </div>
  );
}
