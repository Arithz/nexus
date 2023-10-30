import React from 'react'
import Post from '@components/home/Post';

function Home() {
  return (
    <div className="w-full space-y-2">
        <div className = "flex justify-between w-full">
        <div className = "flex w-fit items-center gap-2 border border-cs-fade3 text-sm py-1 px-3 text-cs-fade3 rounded">
            <p>Hot</p>
            <i className= "fa-solid fa-chevron-down"></i>
        </div>
        <button className = "bg-cs-accent rounded py-1 px-3 text-cs-white text-sm hover:bg-cs-accent-hover transition">
            Create new post
        </button>
        </div>
        
        {[...Array(20)].map((_, i: number) => (
        <div key={i}>
            <Post />
        </div>
        ))}
    </div>
  )
}

export default Home