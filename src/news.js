import React, {useState, useEffect} from 'react'
import NewsCard from './news_card'
import {createClient} from 'contentful'

const client = createClient({
    space: "2vi6yy2c79py",
    accessToken: "ljcp5dK5rOcXX9xQ-UDvS9mso8nwbHwo6i-Fb4r7hac"
})

const news = (props) =>{
    const [posts, setPosts] = useState([]);
    const [activePost, setActivePost] = useState('');

    useEffect(()=>{
        
        client.getEntries({
            content_type: 'post',
            'order': 'sys.createdAt',
            'limit': 3
        }).then(res =>{
            setPosts(res.items)
        });
    }, [])

    return(
        <React.Fragment>
            <div class='news-hero'>
                <div class="news-hero-overlay">
                    <div class="news-head">
                        <h2>CESTEG News</h2>
                        <p>Keep your finger on the pulse</p>
                    </div>
                </div>
                <img src="/static/images/bulb.jpg" alt="news-bulb" />
            </div>
            <div class="news-cards">
                {posts.map((post, i) =>(<NewsCard data={post}/>))}
            </div>
            
        </React.Fragment>
    )
}

export default news