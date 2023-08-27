import React from 'react';

const Blog = (props) => {
    const {title,times,date,author,img} = props.contents;
    return (
        <div>
            <article className='ml-52'>
                <img className='w-[480px] h-[280px] mt-20 rounded-md' src={img} alt="" />
            </article>
        </div>
    );
};

export default Blog;