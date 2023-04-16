"use client";

export default function AppShowSun({ isoDateString }) {
  // Returns the brightness of the sun as a percentage (0 to 100) based on the given date and time.
  // The input should be an ISO date string.
  function getSunBrightness(isoDateString) {
    const date = new Date(isoDateString);
    const totalMinutes = date.getHours() * 60 + date.getMinutes();
    const noonInMinutes = 12 * 60;
    if (totalMinutes >= 7 * 60 && totalMinutes < 18 * 60) {
      const minutesFromNoon = Math.abs(totalMinutes - noonInMinutes);
      const brightnessRatio = 1 - minutesFromNoon / noonInMinutes;
      return 100.0 - brightnessRatio * 100.0;
    }
    return 100.0;
  }

  const sunBrightnessGrayScale = getSunBrightness(isoDateString);

  const style = {
    filter: `grayscale(${sunBrightnessGrayScale}%)`,
    visibility: sunBrightnessGrayScale === 100.0 ? "hidden" : "visible",
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
