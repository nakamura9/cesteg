import styles from '../styles/Products.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from './product'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Clearance = props => {
    const links = [
        {
            src: "/single_panel.jpg",
            title: "Solar Panel",
            qty: 12,
            description: "400W solar Panel"
        },
        {
            src: "/single_panel.jpg",
            title: "Solar Panel",
            qty: 12,
            description: "400W solar Panel"
        },
        {
            src: "/single_panel.jpg",
            title: "Solar Panel",
            qty: 12,
            description: "400W solar Panel"
        },
        {
            src: "/single_panel.jpg",
            title: "Solar Panel",
            qty: 12,
            description: "400W solar Panel"
        },
        {
            src: "/single_panel.jpg",
            title: "Solar Panel",
            qty: 12,
            description: "400W solar Panel"
        },
        {
            src: "/single_panel.jpg",
            title: "Solar Panel",
            qty: 12,
            description: "400W solar Panel"
        }
    ]
    return (
        <div className={styles.products_container}>
            <div  className={styles.products}>
                {links.map( (l, i) => (
                    <Product key={i} {...l} />
                )
                )}
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

export default Clearance
