import React,{useState} from 'react'
import CommentForm from './CommentForm'

const CommentPost = () => {
    const [comments, setComments] =useState([])
    const updateComment =(commentDetails)=>{
        setComments([...comments, commentDetails] )
    }

  return (
    <div>
        <b>Comment section</b>
      <CommentForm addNewComment={updateComment} />
      {comments.length === 0 && <i>No comments yet. Be the first to comment!</i>}
      {comments.map((display, i)=>(
        <div key={i}>     {display}     </div>
      )) }
    </div>
  )
}

export default CommentPost
