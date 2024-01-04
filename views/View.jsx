import React from 'react';

function View({ item }) {
  let pic =
    'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
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
        <h2>
          We will need to get {item.quantity} {item.name}/s, which will cost $
          {item.price} each.
        </h2>
        <img src={item.image ? item.image : pic} className='pic'></img>
      </div>
    </>
  );
}

export default View;
