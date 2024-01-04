import React from 'react';

function New() {
  return (
    <>
      <link type='text/css' href='/css/view.css' rel='stylesheet' />
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
        <h2>Add new item</h2>
        <form action='/list' method='POST'>
          <label>Name:</label>
          <input type='text' name='name' /> <br />
          <label>Type:</label>
          <input type='text' name='type' /> <br />
          <label>Price:</label>
          <input type='text' name='price' /> <br />
          <label>Quantity:</label>
          <input type='text' name='quantity' /> <br />
          <label>Picture:</label>
          <input type='text' name='image' /> <br />
          <input className='submit' type='submit' value='Add item' />
        </form>
      </div>
    </>
  );
}

export default New;
