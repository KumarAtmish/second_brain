"use client";

import React from 'react'

const BlogCard = (props) => {
    const {data} = props;
    
  return (
    <>
        {data?.length>0 && data?.map((value, index)=>{
            return(
                <li key={index}>
	                <a href={`/blog/view/${value.id}`}>
	                    <img src="https://place-hold.it/400x300" alt="" />
	                    <span className="blginfo">
	        	            <h4>{value.title}</h4>
	        	            <p>{value.discription}</p>
	                    </span>
	                </a>
	            </li>
            )
        })}
    </>
  )
}

export default BlogCard