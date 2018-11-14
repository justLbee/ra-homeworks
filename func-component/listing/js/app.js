'use strict';

const offersArr = [];
fetch(`https://neto-api.herokuapp.com/etsy`, {
  method: 'GET',
})
  .then((res) => {
    if (200 <= res.status && res.status < 300) {
      return res;
    }
    throw new Error(res.statusText);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (let el of data) {
      const offer = {
        listing_id: el.listing_id,
        url: el.url,
        MainImage: el.MainImage,
        title: el.title,
        currency_code: el.currency_code,
        price: el.price,
        quantity: el.quantity
      };

      offersArr.push(offer);
    }

    ReactDOM.render(
      list,
      document.getElementById('root')
    );
  })
  .catch((err) => {
    console.log(err);
  });

const list = (
  <div>
    <Listing items={offersArr}></Listing>
  </div>
);

function Listing({items}) {
  if (!items) {
    return null;
  }

  const listItem = items.map(item => {
    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN}/>
          </a>
        </div>
        <div className="item-details">
          {
            item.title.length > 50 ?
              <p className="item-title">{item.title.slice(0, 50)}...</p> :
              <p className="item-title">{item.title}</p>
          }
          {
            (item.currency_code === 'USD') ?
              <p className="item-price">${item.price}</p> :
              (item.currency_code === 'EUR') ?
                <p className="item-price">€{item.price}</p> :
                <p className="item-price">{item.price}{item.currency_code}</p>
          }
          {
            (item.quantity <= 10) ? <p className="item-quantity level-low">{item.quantity} left</p> :
              (item.quantity > 10 && item.quantity <= 20) ?
                <p className="item-quantity level-medium">{item.quantity} left</p> :
                <p className="item-quantity level-high">{item.quantity} left</p>
          }
        </div>
      </div>

    )
  });

  return (
    <div className="item-list">{listItem}</div>
  )
}

// setTimeout(() => {
//   console.log(offersArr);
// }, 2000);