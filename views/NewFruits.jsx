import React from 'react';

function NewFruits() {
  return (
    <>
      <a href='/fruits' style={{ textDecoration: 'none', color: 'blue' }}>
        <h3>Catalogue</h3>
      </a>
      <h1>Add a new fruit</h1>
      <form action='/fruits' method='POST'>
        <label>Name:</label> <input type='text' name='name' /> <br />
        <label style={{ marginRight: '2px' }}>Color:</label>{' '}
        <input type='text' name='color' /> <br />
        <label>Good to eat?</label>
        <input type='checkbox' name='edible' /> <br />
        <input type='submit' value='Add Fruit' style={{ marginTop: '5px' }} />
      </form>
    </>
  );
}

export default NewFruits;
