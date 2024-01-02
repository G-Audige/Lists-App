import React from 'react';

function EditFruit({ fruit }) {
  return (
    <>
      <a href='/fruits' style={{ textDecoration: 'none', color: 'blue' }}>
        <h3>Catalogue</h3>
      </a>
      <h1>Edit the {fruit.name.toLowerCase()}</h1>
      <form action={`/fruits/${fruit._id}?_method=PUT`} method='POST'>
        <label style={{ margin: '1em' }}>Name:</label>
        <input type='text' name='name' defaultValue={fruit.name} />
        <br />
        <label style={{ margin: '1em', marginRight: '18px' }}>Color:</label>
        <input type='text' name='color' defaultValue={fruit.color} />
        <br />
        <label style={{ margin: '1em' }}>Good to eat?</label>
        {fruit.edible ? (
          <input type='checkbox' name='edible' defaultChecked />
        ) : (
          <input type='checkbox' name='edible' />
        )}
        <br />
        <input
          type='submit'
          value='Update Fruit'
          style={{ marginTop: '5px' }}
        />
      </form>
    </>
  );
}

export default EditFruit;
