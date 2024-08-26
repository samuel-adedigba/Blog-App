import React, {useState} from 'react'

const CommentForm = ({addNewComment} ) => {
    const [postComment, setPostComment] =useState('')
    const submitComment=(c)=>{
        c.preventDefault();

        const commentDetails= {
            postComment,
            createdAt: new Date().toLocaleDateString()
        }
        addNewComment=()=>(commentDetails)
        setPostComment('')
        console.log(commentDetails)
    }

  return (
    <div>
      <form onSubmit={submitComment}>
        <textarea value={postComment} onChange={(e)=>{setPostComment(e.target.value)}} name="" placeholder='post a comment'></textarea>
        <button  type='submit'>post comment</button>
      </form>
    </div> 
  )
}

export default CommentForm
