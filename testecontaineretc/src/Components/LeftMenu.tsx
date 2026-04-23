import React, { useContext } from "react";
import { ThemeContext } from "../App";

function LeftMenu() {

  const themeContext = useContext(ThemeContext);
  const { setTheme } = themeContext;

  console.log("Context theme color is " + themeContext.theme);

  return (
    <div className="col-3">

      <div className="row border">
        Left Menu
      </div>

      <div className="row border">
        Style selection Menu
      </div>

      <button
  type="button"
  className="btn btn-primary d-block mb-2"
  onClick={() => setTheme("light")}
>
  Light
</button>

<button
  type="button"
  className="btn btn-dark d-block mb-2"
  onClick={() => setTheme("dark")}
>
  Dark
</button>

<button
  type="button"
  className="btn btn-secondary d-block mb-2"
  onClick={() => setTheme("custom")}
>
  Custom
</button>

    </div>
  );
}

export default LeftMenu;