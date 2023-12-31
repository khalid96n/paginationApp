import React from 'react'

function Posts({posts,loading}){

    if(loading){
        return <h2>Loading.....</h2>;
    }

  return( 
  <ul className='list-group mb-4'>
    {posts.map(post=>(
        <li key={post.id} className='list-group-item'>
          <p>{post.title}</p>{post.body}
          </li>
    ))}
  </ul>
  )
}

export default Posts;