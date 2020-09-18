import React from 'react';
import { Link } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = (props) => {
  return (
      <div className='result-container'>
          <p>{props.location.state.displayMessage}</p>
          <Link to='/'><button>Back to home</button></Link>
      </div>
  );
}

export default ResultPage;
