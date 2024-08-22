import React from 'react'

const PostHeader = ({postName, imageIcon}) => {
  return (
    <div>
         <b> {postName} </b>
      <img src={imageIcon} alt={`${postName}'s profile` } />
     
    </div>
  )
}

export default PostHeader
