import classNames from 'classnames';

const CarouselItem = ({ active, title, productDescription, imgPath, classImage }) => {
  return (
    <div className={classNames('carousel-item', { ['active']: active })}>
      <div className="row pt-5 justify-content-center">
        <div className="col-9 col-sm-4 col-md-6 col-lg-5">
          <h1 className="mb-4">{title}</h1>
          <p className="mb-4">{productDescription}</p>
          <a href="" className="btn btn-warning text-white">
            Get It Now
          </a>
        </div>
        <div className="col-3 col-sm-6 col-md-4 col-lg-4 d-none d-sm-block offset-1">
          <img src={imgPath} className={classImage} />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
