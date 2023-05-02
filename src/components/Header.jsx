import React from 'react'

function Header({text,bgColor}) {
    const bgcolor = bgColor;
  return (
   <header style={{backgroundColor:bgcolor,color:'white'}}>
    <div className='container'>
        <h2>{text}</h2>
    </div>
   </header>
  )
}

Header.defaultProps = {
    text:'Feedback UI',
    bgColor:'red'
}

export default Header