import React, { useState, useEffect } from "react";
import "daisyui/dist/full.css";

const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("night"); // default theme
  const themes = [
    "light",
    "dark",
    "garden",
    "dracula",
    "night",
    "synthwave",
    "dim",
  ]; // add all available themes

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (option) => {
    setTheme(option);
    document.documentElement.setAttribute("data-theme", option);
    setIsOpen(false);
  };

  const getThemeColor1 = (theme) => {
    switch (theme) {
      case "light":
        return "#4a00ff";
      case "dark":
        return "#7480ff";
      case "garden":
        return "#fe0075";
      case "dracula":
        return "#ff79c6";
      case "night":
        return "#38bdf8";
      case "synthwave":
        return "#e779c1";
      default:
        return "#9fe88d";
    }
  };

  const getThemeColor2 = (theme) => {
    switch (theme) {
      case "light":
        return "#ff00d3";
      case "dark":
        return "#ff52d9";
      case "garden":
        return "#8e4162";
      case "dracula":
        return "#bd93f9";
      case "night":
        return "#818cf8";
      case "synthwave":
        return "#58c7f3";
      default:
        return "#ff7d5c";
    }
  };

  const getThemeColor3 = (theme) => {
    switch (theme) {
      case "light":
        return "#00d7c0";
      case "dark":
        return "#00cdb8";
      case "garden":
        return "#5c7f67";
      case "dracula":
        return "#ffb86c";
      case "night":
        return "#f471b5";
      case "synthwave":
        return "#ffd200";
      default:
        return "#c792e9";
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".flex")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="flex justify-end mr-5">
      <div>
        <button
          className="inline-flex mt-5 border-none justify-center w-full rounded-md border  shadow-sm px-4 py-2 bg-transparent text-sm font-semibold text-primary  focus:outline-none focus:ring-2 focus:ring-offset-primary focus:ring-primary"
          type="button"
          onClick={handleButtonClick}
        >
          Select Theme
          <svg
            className="mr-2 ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.293l3.71-3.08a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <div
            className="w-4 h-4 ml-2 rounded-full"
            style={{
              backgroundColor: getThemeColor1(theme),
            }}
          />
          <div
            className="w-4 h-4 ml-2 rounded-full"
            style={{
              backgroundColor: getThemeColor2(theme),
            }}
          />
          <div
            className="w-4 h-4 ml-2 rounded-full"
            style={{
              backgroundColor: getThemeColor3(theme),
            }}
          />
        </button>
        {isOpen && (
          <div className="absolute bg-secondary-content right-0 z-10 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {themes.map((themeOption) => (
                <button
                  key={themeOption}
                  className={`block px-4 py-2 font-bold text-sm text-primary hover:bg-primary-content w-full text-left ${
                    theme === themeOption ? "bg-primary-content" : ""
                  }`}
                  onClick={() => handleThemeChange(themeOption)}
                >
                  {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeDropdown;
