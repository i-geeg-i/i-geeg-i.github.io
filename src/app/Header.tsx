"use client";
import { use, useEffect, useState } from "react";

import "./style.css";

const names: string[] = ["GEEG", "i-geeg-i", "Egor Glebov"];
export default function Header() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (index == names.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 1000);
  }, [index]);
  return (
    <header>
      <h1 style={{ color: "white" }} id="name">
        {names[index]}
      </h1>
      <nav>
        <a className="nav" href="./">
          Main page
        </a>
        <a className="nav" href="about">
          About Me
        </a>
        <a className="nav" href="portfolio">
          Portfolio
        </a>
        <a className="nav" href="contacts">
          Contact Me
        </a>
      </nav>
    </header>
  );
}
