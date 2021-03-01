import React from 'react';
import Link from 'next/link';

const Card = ({ thumb, title, price, id }) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className="col-sm-4 p-3">
        <div className="card shadow-sm">
          <img
            className="card-img-top"
            src={thumb}
            loading="lazy"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title card__title">{title}</h5>

            <p className="card-text text-muted">IDR. {price}</p>
            <a href="#" className="btn btn-thirty">
              Detail
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
