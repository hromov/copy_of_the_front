
import { Link } from 'react-router-dom';
import styles from './MenuLinks.module.css'

export const MenuLinks = (props) => {
    return (
        <ul className={`${styles.menu__links} ${props.active ? styles.active : ''}`}>
            {props.links.map((link) => (
                <li key={link.id}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
        </ul>
    );
}