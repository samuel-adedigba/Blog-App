import React,{useState,useEffect} from 'react'

const Reactions = () => {
    const [showReactions, setReactions] = useState({
        "like" :0,
        "love" :0,
        "angry" :0,
        "sad" :0,
        "neutral" :0,
    })

    const handleReactions = (type)=>{
        setReactions({ ...showReactions, [type]: showReactions[type]  +1 });
    }
  return (
    <div>
      <button onClick={()=> handleReactions('like')} > Like {showReactions.like} </button>
      <button onClick={ ()=> handleReactions('love')} > Love {showReactions.love} </button>
      <button onClick={ ()=> handleReactions('angry')} > Angry {showReactions.angry} </button>
      <button onClick={ ()=> handleReactions('sad')} > Sad {showReactions.sad} </button>
      <button onClick={ ()=> handleReactions('neutral')} > Neutral {showReactions.neutral} </button>
    </div>
  )
}

export default Reactions
