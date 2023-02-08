import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Departments = props => {
    const links = [
        {image: '/inverter.jpg', label: "Inverters"},
        {image: '/panels.jpg', label: "Solar Panels"},
        {image: '/battery.jpg', label: "Batteries"}
    ]
    return (
        <div className={styles.departments}>
            {links.map( l => (
                <div className={styles.department} key={l.image}>
                    <img src={l.image} />
                    <div>
                        <h5>{l.label}</h5>
                    </div>
                </div>)
            )
            }
        </div>
    )
}

export default Departments
