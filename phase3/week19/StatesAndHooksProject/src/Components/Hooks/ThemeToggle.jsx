import { useState } from "react"


//question number 4

function ThemeToggle() {

const [isDarkMode, setIsDarkMode] = useState(false);

function toggleTheme() {
    setIsDarkMode(!isDarkMode);
}

const themeStyles = {
  backgroundColor: isDarkMode ? "#17212B" : "#F5F5F5",
  color: isDarkMode ? "white" : "black",
  minHeight: "150px",
  padding: "20px"
};
  return (
    <>
    <div style={themeStyles}>

      <h2>
        Current theme: {isDarkMode ? "Dark" : "Light"}
      </h2>

      <button onClick={toggleTheme}>

        {isDarkMode
        ? "switch to light mode"
        : "switch to Dark mode"
        }
      </button>
    </div>
    </>
  )
}
export default ThemeToggle