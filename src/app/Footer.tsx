import styles from "./menu.module.css";

type Props = {
  year: string;
};
export default function Footer(props: Props) {
  return (
    <footer>
      <p>GEEG {props.year}</p>
      <p>All rights reserved</p>
      <p>Icons - icons8.com</p>
    </footer>
  );
}
