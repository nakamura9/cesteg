import React, {useState, useEffect} from 'react'
import ProductCategory from './product_category'
import {createClient} from 'contentful'

const client = createClient({
    space: "2vi6yy2c79py",
    accessToken: "ljcp5dK5rOcXX9xQ-UDvS9mso8nwbHwo6i-Fb4r7hac"
})

const products =(props) =>{
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        
        client.getEntries({
            content_type: 'productCategory',
        }).then(res =>{
            setCategories(res.items)
        });
    }, [])
    return(
        <React.Fragment>
            {categories.map(cat =>(
                <ProductCategory data={cat} />
            ))}
        </React.Fragment>
        )
}

export default products