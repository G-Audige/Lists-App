import React from 'react';

function Edit({ item }) {
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
        <h2>Edit item</h2>
        <form action={`/list/${item._id}?_method=PUT`} method='POST'>
          <label>Name:</label>
          <input type='text' name='name' defaultValue={item.name} /> <br />
          <label>Type:</label>
          <input type='text' name='type' defaultValue={item.type} /> <br />
          <label>Price:</label>
          <input type='text' name='price' defaultValue={item.price} /> <br />
          <label>Quantity:</label>
          <input
            type='text'
            name='quantity'
            defaultValue={item.quantity}
          />{' '}
          <br />
          <label>Picture:</label>
          <input type='text' name='image' defaultValue={item.image} /> <br />
          <input style={{ margin: '1em' }} type='submit' value='Edit item' />
        </form>
      </div>
    </>
  );
}

export default Edit;
