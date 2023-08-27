import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Article = () => {
        const [blogs,setBlogs] = useState([]);
    
         useEffect(()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
         } ,[])
    
    return (
        <div>
               {
                blogs.map(blog => <Blog contents ={blog} ></Blog>)
               }
        </div>
    );
};

export default Article;