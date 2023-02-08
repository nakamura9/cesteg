import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Brands = props => {
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
        <div className={styles.brandsContainer}>
            <div  className={styles.brands}>
                {links.map( l => (
                    <div className={styles.brand} key={l}>
                        <img src={l} />
                    </div>)
                )
                }
            </div>
            <div class={styles.dots}>
                <div class={styles.dot}></div>
                <div class={styles.dot}></div>
                <div class={styles.dot}></div>
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

export default Brands
