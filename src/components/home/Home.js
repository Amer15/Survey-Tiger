import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
   return (
       <main className='main-container'>
         <div className='btn-container'>
             <Link to='/create-survey'><button>Create Survey</button></Link>
             <Link to='/take-survey'><button>Take Survey</button></Link>
         </div>
       </main>
   )
}

export default Home;
