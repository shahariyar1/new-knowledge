import React, { useEffect, useState } from 'react';

const Article = () => {
        const [blogs,setBlogs] = useState([]);
    
         useEffect(()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
         } ,[])
    
    return (
        <div>
            <article>
               {
                blogs.map(blog =><p>{blog.title}</p>)
               }
            </article>
        </div>
    );
};

export default Article;