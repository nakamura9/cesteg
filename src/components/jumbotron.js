import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Jumbotron = props => {
    const links = [
        '/brands/arco.png',
        '/brands/lorentz.png',
        '/brands/midnite.png',
        '/brands/morning-star.png',
        '/brands/outback-power.png',
        '/brands/phocos.png',
        '/brands/rolls.png',
        '/brands/tbb.png',
        '/brands/timsan.png',
        '/brands/trina-solar.png',
        '/brands/solar-com.png',
        '/brands/schneider-electric-vector-logo.svg',
    ]
    return (
        <div className={styles.jumbotron} >
            <img src="home.jpg" />
            <div className={styles.card}>
                <h2>Solar Calculator</h2>
                <h4>Powered By Cesteg.</h4>
                <p>Enter some basic information about your home and energy consumption and get a quote to match your needs</p>
                <a href="">Go To Calculator</a>
            </div>

            <div className={styles.navRight}>
                <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </div>
            <div className={styles.navLeft}>
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </div>
        </div>
    )
}

export default Jumbotron
