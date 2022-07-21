import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const appClass = isDarkTheme ? "App dark" : "App light"

  function handleClick(){
    setIsDarkTheme((isDarkTheme) => !isDarkTheme)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkTheme ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
