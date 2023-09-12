import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
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
        </div>
    );
};

export default Blogs;