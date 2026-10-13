import  { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {_id : "1",
        image : "https://ik.imagekit.io/syedfarhan/image_XJE8EjjAF.jpg",
        caption : "This is a sample caption for the post."}
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res)=> {
            console.log(res.data)

            setPosts(res.data.posts)
            
        })
    }, [])


  return (
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
  )
}

export default Feed