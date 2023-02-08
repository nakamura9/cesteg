import styles from '../styles/Products.module.css'


const Product = props => {
    return (
        <div className={styles.product}>
            <div className={styles.product_img}>
                <img src={props.src} />
            </div>
            <div  className={styles.product_text}>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p>UNITS AVAILABLE: {props.qty}</p>
            </div>
        </div>
    )
}

export default Product