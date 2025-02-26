import clsx from "clsx";
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const buildCssClasses = ({ isActive }) => clsx(styles.link, isActive && styles.active);

const Navigation = () => {
   
    return (
        <nav className={styles.menuWrapper}>
            <NavLink className={buildCssClasses} to="/">Home</NavLink>
            <NavLink className={buildCssClasses} to="/catalog">Catalog</NavLink>
        </nav>
    );
}
export default Navigation;