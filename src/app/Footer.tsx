import styles from "./menu.module.css"

type Props = {
    year : string;
}
export default function Footer(props : Props){
    return (
        <footer>
        <p>GEEG</p>
        <p>All rights reserved</p>
        <p>{props.year}</p>
        </footer>
    )
}