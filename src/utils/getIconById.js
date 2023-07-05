import clearSkyDay from "../assets/icons/icons/1.svg";
import clearSkyNight from "../assets/icons/clear_sky_night.svg";
import fewCloudsDay from "../assets/icons//icons/2.svg";
import fewCloudsNight from "../assets/icons/icons/4.svg";
import scatteredClouds from "../assets/icons/icons/3.svg";
import brokenClouds from "../assets/icons/icons/4.svg";
import showerRain from "../assets/icons/icons/5.svg";
import rainDay from "../assets/icons/icons/6.svg";
import rainNight from "../assets/icons/icons/8.svg";
import thunderstorm from "../assets/icons/icons/9.svg";
import snow from "../assets/icons/icons/7.svg";
import mist from "../assets/icons/icons/8.svg";

export const getIconById = (idIcon) => {
    switch (idIcon) {
    case "01d":
        return clearSkyDay;
    case "01n":
      return clearSkyNight;
    case "02d":
      return fewCloudsDay;
    case "02n":
      return fewCloudsNight;
    case "03d":
    case "03n":
      return scatteredClouds;
    case "04d":
    case "04n":
      return brokenClouds;
    case "09d":
    case "09n":
      return showerRain;
    case "10d":
      return rainDay;
    case "10n":
      return rainNight;
    case "11d":
    case "11n":
      return thunderstorm;
    case "13d":
    case "13n":
      return snow;
    case "50d":
    case "50n":
      return mist;
  }
};
