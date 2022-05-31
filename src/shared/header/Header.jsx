import { Link } from "react-router-dom"
import { ToggleMenu } from "./ToggleMenu/ToggleMenu"
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <nav className={styles.navbar} id="menu">
            <Link to="/" id="logo" className="logo colored c-text">Mortgage Calc</Link>
            <ToggleMenu />
        </nav>
    )
}