import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// Getting unique categories + all
const allCategories = ["all", ...new Set(items.map((i) => i.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (cat) => {
    if (cat === "all") {
      setMenuItems(items);
      return;
    }
    // Will be using original "items" object due to this one will never change
    const newItems = items.filter((i) => i.category === cat);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
