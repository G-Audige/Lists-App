import React from 'react';

function List({ items }) {
  return (
    <>
      <link type='text/css' href='/css/list.css' rel='stylesheet' />
      <div className='header'>
        <div className='top-header'>
          <a href='/'>Home Page</a>
          <a href='/list'>
            List <img src='https://i.imgur.com/Cl0Bvji.png' alt='' />
          </a>
        </div>
        <h1>Shopping Lists App</h1>
      </div>
      <div className='add'>
        <a href='/list/new'>Add new item</a>
      </div>
      <div className='content'>
        <form action=''></form>
        <div className='list'>
          {items.map((item, i) => {
            let image =
              ' https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
            return (
              <div className='item'>
                <div key={i} className='item-left'>
                  {item.name}
                  <img src={item.image ? item.image : image} />
                </div>
                <div className='item-right'>
                  <a href={`/list/${item.id}`}>
                    <div>View</div>
                  </a>
                  <a href={`/list/${item.id}/edit`}>
                    <div className='edit'>Edit</div>
                  </a>
                  <form
                    action={`/list/${item._id}?_method=DELETE`}
                    method='POST'
                  >
                    <div>
                      <input type='submit' value='Delete' />
                    </div>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default List;
