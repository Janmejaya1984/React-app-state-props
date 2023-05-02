import React from 'react'
import FeedbackItem from './FeedbackItem'
function FeedbackList({feedbackarr}) {
    if(!feedbackarr || feedbackarr.length===0){
        return <p>There is no feedback submitted yet!</p>
    }
  return (
    <div className="feedback-list">
        {
            feedbackarr.map((item)=><FeedbackItem key={item.id} item={item}/>)
        }
    </div>
  )
}

export default FeedbackList