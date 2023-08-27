import React from 'react';

const Blog = (props) => {
    const {title,times,date,author,img,img2} = props.contents;
    return (
        <div>
            <article className='ml-52'>
                <img className='w-[480px] h-[280px] mt-10 rounded-md' src={img} alt="" />
            <div className='flex mt-6 space-x-3'>
                <img className='w-10 h-full' src={img2} alt="" />
                <div>
                    <h1>{author}</h1>
                    <p>{date}</p>
                </div>
                <div className='pl-[11rem]'>
                    <h1>{times}</h1>
                </div>
            </div>
            <div className='pt-7'>
            <h1>{title}</h1>
            <p>Mark as read</p>
            </div>
            </article>
            <hr className='w-[35rem] mx-48 mt-4' />
        </div>
    );
};

export default Blog;