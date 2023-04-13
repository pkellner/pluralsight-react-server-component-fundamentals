export default function AppShowSun({ isoDateString }) {
  // Returns the brightness of the sun as a percentage (0 to 100) based on the given date and time.
  // The input should be an ISO date string.
  function getSunBrightness(isoDateString) {
    const date = new Date(isoDateString);
    const totalMinutes = date.getHours() * 60 + date.getMinutes();
    const noonInMinutes = 12 * 60;

    // Check if the time is between 7:00 AM and 6:00 PM
    if (totalMinutes >= 7 * 60 && totalMinutes < 18 * 60) {
      const minutesFromNoon = Math.abs(totalMinutes - noonInMinutes);
      const brightnessRatio = 1 - minutesFromNoon / noonInMinutes;
      return 100.0 - brightnessRatio * 100.0;
    }
    // If the time is outside the 7:00 AM to 6:00 PM range, return 100 (0% brightness)
    return 100.0;
  }

  const style = {
    filter: `grayscale(${getSunBrightness(isoDateString)}%)`,
  };

  function is_server() {
    return !(typeof window != "undefined" && window.document);
  }

  console.log("AppShowSun: isServer:", is_server() ? "true" : "false  ");

  return (
    <div>
      <div>
        <img src="../../images/sun.png" style={style} />
      </div>
    </div>
  );
}
