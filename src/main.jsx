import React, { useEffect } from 'react' ;
import './index.css';


function Main(){

    useEffect(() => {
        document.title = 'Portfolio'; // Set the document title
      }, []);
    

    return(<>
    
    <div className='section'>
        
    <h1 style={{border : 'dashed', color : 'darkgreen', textShadow : '2px 2px 5px red' }}>This is my Portfolio</h1>

    </div>
    <div className='main-container'>
    <img src={process.env.PUBLIC_URL + '/Self.jpg'} alt='Self' />
</div>
<div>
<p id='main'>
Hello there, Myself Arshan Khan i am from nagpur. I have completed my schooling from KJPS, I am currently pursuing my B.E/B.Tech Degree from G.H
Raisoni institute of Engineering and Technology. my hobies are playing football, indoor and outdoor games.
I have knowlegde about coding languages like HTML, CSS, Javascript and JS.react. Thank you</p>
</div>

  
    
   
    </>)
}

export default Main ;