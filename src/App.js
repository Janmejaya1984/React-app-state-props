
import { useState } from 'react';
import './App.css';
import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
  return (
   <>
   <Header text="New Feedback App-XXX!!!!" bgColor="black"/>
   <div className='container'>
    <FeedbackList feedbackarr={feedback}/>

   {/**<FeedbackItem/>
    <FeedbackItem/>
    <FeedbackItem/>
    <FeedbackItem/>
    <FeedbackItem/> */} 
   </div>
   </>
  );
}

export default App;
