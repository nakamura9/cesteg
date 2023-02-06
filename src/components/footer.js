import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

// import the icons you need

const Footer = props => {
    return (
    <div className={styles.footer}>
        <div className={styles.footer_links}>
            <div>
                <h4>SHOP</h4>
                <ul>
                    <li><a href="">Inverters</a></li>
                    <li><a href="">Solar Panels</a></li>
                    <li><a href="">Energy Storage</a></li>
                    <li><a href="">Balance of System</a></li>
                    <li><a href="">Clearance Items</a></li>
                </ul>
            </div>
            <div>
                <h4>TOOLS</h4>
                <ul>
                    <li><a href="">Support</a></li>
                    <li><a href="">Go to Platform</a></li>
                    <li><a href="">Design of a PV System</a></li>
                    <li><a href="">Simple Calculator</a></li>
                    <li><a href="">Training</a></li>
                </ul>
            </div>
            <div>
                <h4>INFORMATION</h4>
                <ul>
                    <li><a href="">Branches</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                    <li><a href="">Payment Terms</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </div>
            <div>
                <h4>STAY CONNECTED</h4>
                <div className={styles.links}>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} size={"2x"} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} size={"2x"} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faYoutube} size={"2x"} />
                    </div>
                    
                </div>
                <h4>SIGN UP FOR OUR NEWSLETTER</h4>
                <input type="text" name="" id="" placeholder='Enter your email address' />
                <button>Submit</button>
            </div>
        </div>
        <div className={styles.copyright}>
            <div>
                (c) Cesteg Engineering
            </div>
        </div>
    </div>
)


}

export default Footer