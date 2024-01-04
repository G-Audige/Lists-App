import React from 'react';

function Main() {
  return (
    <>
      <link type='text/css' href='/css/main.css' rel='stylesheet' />
      <div className='header'>
        <div className='top-header'>
          <a href='/'>Home Page</a>
          <a href='/list'>
            List <img src='https://i.imgur.com/Cl0Bvji.png' alt='' />
          </a>
        </div>
        <h1>Shopping Lists App</h1>
      </div>
      <div className='content'>
        <div className='direct'>
          <a href='/list'>
            <h2>Go to your list</h2>
          </a>
        </div>
        <img
          src='https://i.imgur.com/Ik4jUTS.png'
          alt='list'
          className='image'
        />
      </div>
    </>
  );
}

export default Main;
