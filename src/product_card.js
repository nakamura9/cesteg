import React from 'react'

const productCard = (props) =>{
    return(
        <div class="card">
            <img src={props.data.fields.image.fields.file.url} alt={props.data.fields.name} />
            <div class="card-body">
                <h5>{props.data.fields.name}</h5>
                {/*<div>
                    <div><button className="btn"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></button></div>
                    <div>{props.data.fields.description}</div>
                </div>*/}
            </div>
        </div>
    )
}

export default productCard