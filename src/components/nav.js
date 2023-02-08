import styles from '../styles/Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Nav = props => {
    return (
        <div className={styles.nav}>
            <div className={styles.search}>
                <input placeholder="Search" type="text" />
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className={styles.logo_row}>
                <img src="cesteg.PNG" width="120px" height="80px" />
                    <div>
                    Wish Lists <br /> Sign In or Create An Account
                </div>
            </div>
            
            <div className={styles.link_row}>
                <ul>
                    <li><a href="">Inverters</a></li>
                    <li><a href="">Solar Panels</a></li>
                    <li><a href="">Energy Storage</a></li>
                    <li><a href="">Balance of System</a></li>
                    <li><a href="">Clearance Items</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav