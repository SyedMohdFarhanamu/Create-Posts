// import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios.post('http://localhost:3000/create-post', formData)
        .then((res) => {
            // alert('Post created successfully');
            // e.target.reset(); // reset the form after successful submission
            console.log(res);
            e.target.reset()
            navigate('/feed');
        })
        .catch((err) => {
            console.error('Error creating post:', err);
            alert('Failed to create post');
        });
    }


  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name="caption" required placeholder="Enter post caption" />
            <button type="submit">Submit</button>
        </form>
        
    </section>
  )
}

export default CreatePost