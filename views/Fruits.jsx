import React from 'react';

function Fruits({ fruits }) {
  return (
    <div>
      <div style={{ backgroundColor: 'blue', padding: '1px 5px 1px 5px' }}>
        <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
          <h3>Main Page</h3>
        </a>
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          Fruits Catalogue
        </h1>
      </div>

      <a
        href='/fruits/new'
        style={{ textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}
      >
        Get new fruits
      </a>
      <div
        style={{
          border: '2px solid gray',
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: '10px',
          justifyContent: 'space-evenly',
        }}
      >
        {fruits.map((fruit, i) => {
          let color = fruit.color.toLowerCase();
          return (
            <div
              key={i}
              style={{
                border: `1px solid ${color}`,
                width: '200px',
                margin: '10px',
              }}
            >
              {' '}
              <p>
                {' '}
                A {fruit.color.toLowerCase()} {fruit.name.toLowerCase()} that{' '}
                {fruit.edible ? <span>can</span> : <span>can't</span>}
                {fruit.edible} be eaten right now.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <a href={`/fruits/${fruit._id}/edit`}>
                    <button>Edit</button>
                  </a>
                </div>
                <form
                  action={`/fruits/${fruit._id}?_method=DELETE`}
                  method='POST'
                >
                  <input type='submit' value='Discard' />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Fruits;
