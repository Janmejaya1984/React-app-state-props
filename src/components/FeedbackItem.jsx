import React from 'react'
import Card from './Card'
function FeedbackItem({item}) {
   {/**
const [rating,setRating] = useState(7);
    const [text,setText] = useState("This is a dummy feedback");
    const handleClick = ()=>{
        setRating(rating+1);
    }

    <button onClick={handleClick}>Increment Rating</button>
*/} 
  return (
    <Card className='card' reverse={true}>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
        
    </Card>
  )
}

export default FeedbackItem