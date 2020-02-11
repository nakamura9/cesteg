import React from 'react';

const client = createClient({
    space: "2vi6yy2c79py",
    accessToken: "ljcp5dK5rOcXX9xQ-UDvS9mso8nwbHwo6i-Fb4r7hac"
})

const newsDetail =(props) => {
    return(
        <div className='post-window'>
            <div classNmae='post-content'>
                <div className="post-hero-overlay">
                    <h2></h2>
                    <p> <i className="fas fa-user    "></i> </p>
                    <p> <i class="fas fa-clock    "></i></p>
                </div>
            </div>
        </div>
    )
}

export default newsDetail