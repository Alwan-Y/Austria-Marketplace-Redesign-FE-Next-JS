import CarouselItem from '../CarouselItem';

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel__margin"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="container">
          <CarouselItem
            active="active"
            title="Especially For Muslim Men"
            productDescription="Make your days happier and memorable with new clothes"
            imgPath="catalogSvg/pria1.svg"
            classImage="carousel__img-fluid-2"
          />
          <CarouselItem
            title="Especially For Muslim Women"
            productDescription="Make your days happier and memorable with new clothes"
            imgPath="catalogSvg/wanita4.svg"
            classImage="carousel__img-fluid-2"
          />
          <CarouselItem
            title="Especially For Muslim Kids"
            productDescription="Make your days happier and memorable with new clothes"
            imgPath="catalogSvg/anak6.svg"
            classImage="carousel__img-fluid-2"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
