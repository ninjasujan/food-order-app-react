import React from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React meals.</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
};

export default Header;
