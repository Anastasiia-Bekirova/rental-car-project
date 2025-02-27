import { useNavigate } from "react-router-dom";

import styles from './Hero.module.css';

const Hero = () => {
    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate("/catalog"); 
    };
    return (
        <div className={styles.heroContainer}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Find your perfect rental car</h1>
                <p className={styles.text}>Reliable and budget-friendly rentals for any journey</p>
                <button className={styles.heroBtn} onClick={handleNavigate}>View Catalog</button>
            </div>
        </div>
    );
};

export default Hero;