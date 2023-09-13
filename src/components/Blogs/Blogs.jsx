import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark}) => {
    //We need state to hold data
    const [blogs, setBlogs] = useState([]);
    //Loading data we use useEffect
    useEffect(()=>{
        //we will just write the file name as it's a local file
        fetch('blogs.json')
        .then(res => res.json())
        //set data into the state
        .then(data => setBlogs(data));
    },[]);
    return (
        <div className="md:w-2/3 mx-auto">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                //map each blog to show dynamically and sending props
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}    
                ></Blog>)
            }
        </div>
    );
};
//adding prop types
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}
export default Blogs;