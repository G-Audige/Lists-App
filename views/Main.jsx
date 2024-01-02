import React from 'react';

function Main() {
  return (
    <>
      <h1
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '5px',
          textAlign: 'center',
        }}
      >
        Lists App
      </h1>
      <div style={{ display: 'flex' }}>
        <a href='/fruits' style={{ textDecoration: 'none', color: 'blue' }}>
          <div>
            <h4 style={{ textAlign: 'center' }}>Fruits</h4>
            <div
              style={{
                backgroundImage:
                  'url("https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg")',
                backgroundSize: 'contain',
                border: '2px solid gray',
                borderRadius: '10px',
                height: '150px',
                width: '150px',
              }}
            ></div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Main;
