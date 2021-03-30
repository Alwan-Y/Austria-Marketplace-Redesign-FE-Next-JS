import React from 'react';
import Link from 'next/link';

const Card = ({ item, id2, thumb2, title2, price2, additionalContent }) => {
  let img = '';
  let name = '';
  let price = '';
  let id = '';

  if (item) {
    img = item.img;
    name = item.name;
    price = item.price;
    id = item.id;
  }

  return (
    <div className="col-sm-4 p-3">
      <Link href={`/detail/${id || id2}`}>
        <div className="card border-0">
          <img
            className="card-img-top"
            src={img || thumb2}
            loading="lazy"
            alt="Card image cap"
          />
          <div className="card-body px-0 text-center">
            <h5 className="card-title card__title mb-2">{name || title2}</h5>
            <div className="card__divider mb-2"></div>
            <p className="card-text card__text">Rp{price || price2}</p>
          </div>
        </div>
      </Link>
      {additionalContent}
    </div>
  );
};

export default Card;
