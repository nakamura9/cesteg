import React from 'react'

const newsCard = (props) =>{
    return(
        <div class="card">
            <img src={props.data.fields.image.fields.file.url} alt="" />
            <div class="card-body">
                <h4 className='news-card-title' onClick={() => {props.setActivePost(props.data.sys.id)}}>{props.data.fields.title}</h4>
                <p><i className="fas fa-user    "></i>{props.data.fields.author}</p>
                <p><i className="fas fa-clock    "></i> {new Date(props.data.fields.created).toDateString()}</p>
            </div>
        </div>
    )
}

export default newsCard