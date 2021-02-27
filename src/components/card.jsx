import React from 'react';

const Card = ({ thumb, title, price }) => {
  return (
    <div className="col-sm-4 p-4">
      <div className="card shadow-sm">
        <img
          className="card-img-top"
          src={thumb}
          loading="lazy"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">Rp. {price}</p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
