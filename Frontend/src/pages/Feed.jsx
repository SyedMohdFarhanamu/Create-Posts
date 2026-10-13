import  { useState, useEffect } from 'react'
import axios from 'axios'
import API_URL from '../config'
const Feed = () => {

    const [posts, setPosts] = useState([
        {_id : "1",
        image : "https://ik.imagekit.io/syedfarhan/image_XJE8EjjAF.jpg",
        caption : "This is a sample caption for the post."}
    ])

    useEffect(() => {
        axios.get(`${API_URL}/posts`)
        .then((res)=> {
            console.log(res.data)

            setPosts(res.data.posts)
            
        })
    }, [])


  return (
        <>
            <h1 className="feed-title">YARANA</h1>
            <section className='feed-section'>
                {
                    posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className='post'>
                                <img src={post.image} alt="Post" />
                                <p>{post.caption}</p>
                            </div>
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
            </section>
        </>
  )
}

export default Feed