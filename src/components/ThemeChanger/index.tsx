"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      The current theme is: {isClient && <span>{theme}</span>}
      <br />
      {theme === "dark" && (
        <button
          onClick={() => setTheme("light")}
          style={{
            backgroundColor: "#ffff008a",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <CiLight color="yellow" />
        </button>
      )}
      {theme === "light" && (
        <button
          onClick={() => setTheme("dark")}
          style={{
            backgroundColor: "#0000007a",
            padding: "5px",
            borderRadius: "50%",
          }}
        >
          <MdDarkMode />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
