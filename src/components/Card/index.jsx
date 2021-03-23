import React from 'react';
import Link from 'next/link';

const Card = ({ item, additionalContent }) => {
  const { img, name, price, id } = item;
  return (
    <div className="col-sm-4 p-3">
      <Link href={`/detail/${id}`}>
        <div className="card border-0">
          <img
            className="card-img-top"
            src={img}
            loading="lazy"
            alt="Card image cap"
          />
          <div className="card-body px-0 text-center">
            <h5 className="card-title card__title mb-2">{name}</h5>
            <div className="card__divider mb-2"></div>
            <p className="card-text card__text">Rp{price}</p>
          </div>
        </div>
      </Link>
      {additionalContent}
    </div>
  );
};

export default Card;
