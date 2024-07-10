"use client";
type Props = {
  text: string;
  link: string;
  title: string;
};
import { useState } from "react";
import "./style.css";
export default function BeautifulA(props: Props) {
  const [disp, setDisp] = useState(false);
  function mouseOn(): void {
    setDisp(true);
  }
  function mouseOff(): void {
    setDisp(false);
  }
  return (
    <span className="a" onMouseEnter={mouseOn} onMouseLeave={mouseOff}>
      <a href={props.link}>{props.text}</a>
      <img
        src="map.png"
        style={{
          width: "18px",
          height: "18px",
          display: disp ? "inline" : "none",
        }}
        title={props.title}
      ></img>
    </span>
  );
}
