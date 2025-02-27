import clsx from "clsx";
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import logo from '../../img/RentalCar.png';

const buildCssClasses = ({ isActive }) => clsx(styles.link, isActive && styles.active);

const Navigation = () => {
   
    return (
        <nav className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <NavLink className={styles.logo} to="/"><img src={logo} alt="Logo" /></NavLink></div> 
            <div className={styles.menuContainer}>
                <NavLink className={buildCssClasses} to="/">Home</NavLink>
                <NavLink className={buildCssClasses} to="/catalog">Catalog</NavLink>
            </div>
            
        </nav>
    );
}
export default Navigation;