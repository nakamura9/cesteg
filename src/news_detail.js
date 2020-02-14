import React from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {createClient } from 'contentful'
const client = createClient({
    space: "2vi6yy2c79py",
    accessToken: "ljcp5dK5rOcXX9xQ-UDvS9mso8nwbHwo6i-Fb4r7hac"
})

const newsDetail =(props) => {
    const [post, setPost] = React.useState(null)
    React.useEffect(()=>{
        client.getEntry(props.postID).then(res=>{
            setPost(res)
        })
    }, [])
    return(
        post ? 
            <div className='overlay post-window' onClick={props.hidePost}>
                <div className='post-content' onClick={evt => evt.stopPropagation()}>
                    <div className="post-hero">
                        <img src={post.fields.image.fields.file.url} alt=""/>

                        <div className="post-hero-overlay">
                            <h2>{post.fields.title}</h2>
                            <p> <i className="fas fa-user    "></i>  {post.fields.author}</p>
                            <p> <i class="fas fa-clock    "></i> {post.fields.created}</p>
                        </div>
                    </div>
                    
                    <div className="post-inner-content">
                        {documentToReactComponents(post.fields.content)}
                    </div>
                </div>
            </div>
            : <span>loading post</span>
        
    )
}

export default newsDetail