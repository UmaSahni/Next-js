import React from 'react'

const BlogPage = ({params}) => {
    console.log(params)
  return (
    <div>
        {`You are visiting blog post no. ${params.id}`}
      <h1 className='font-bold' >This is Blog Post {params.id}</h1>
    </div>
  )
}

export default BlogPage