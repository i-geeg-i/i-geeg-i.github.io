'use client'
import { use, useEffect, useState } from "react";

import styles from "./menu.module.css"
type Props = {
    page : string;
}

const names: string[] = ["GEEG", "i-geeg-i", "Egor Glebov"];
export default function Header(props : Props){
    const [index, setIndex] = useState(0)
    useEffect(() => {
      setTimeout(() => {
        if (index == names.length - 1){
            setIndex(0);
        }
        else{
            setIndex(index + 1)
        }
      }, 1000);
    }, [index])
    return (
        <header>
            <h1 style={{color: "white"}} id="name">{names[index]}</h1>
            <nav>
                <a className={getClassName("index", props.page)} href="./">Main page</a>
                <a className={getClassName("about", props.page)} href="about">About Me</a>
                <a className={getClassName("portfolio", props.page)} href="portfolio">Portfolio</a>
                <a className={getClassName("contacts", props.page)} href="contacts">Contact Me</a>
            </nav>
        </header>
    )
}


function getClassName(link: string, page: string):string{
    if (link===page){
        return "navNow";
    }
    return "nav";
}