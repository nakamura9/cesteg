import React, {useState} from 'react'
import ProductCard from './product_card'

const productCategory = (props) =>{
    const [showContent, setShowContent] = useState(false)
    return(
        <div 
          onClick={() => setShowContent(!showContent)}
          className="product-container">
            <div className="product-category">
            <h4>{props.data.fields.name}</h4>
            <div className="btn text-white" 
                >
                <i className={`fa fa-caret-${showContent ? 'down' : 'left'}`} aria-hidden="true"></i>
            </div>
        </div>
        <div className="product-category-contents" style={{display: showContent ? 'block' : 'none'}}>
            <p className='product-category-description'>
            {props.data.fields.description}
            </p>
            <hr />
            <div className="product-cards">
                {props.data.fields.products.map(product =>(
                    <ProductCard data={product}/>))}
            </div>
            <div className='product-navigation'>
                <div className="btn-group">
                    <button className="btn" onClick={(evt) =>{
                        evt.stopPropagation()
                    }}><i className="fas fa-arrow-left    "></i></button>
                    <button className="btn" onClick={(evt) =>evt.stopPropagation()}><i className="fas fa-arrow-right    "></i></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default productCategory