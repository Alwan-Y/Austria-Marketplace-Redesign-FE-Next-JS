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
            imgPath="image1.jpg"
            classImage="carousel__img-fluid-2"
          />
          <CarouselItem
            title="Especially For Muslim Women"
            productDescription="Make your days happier and memorable with new clothes"
            imgPath="https://dynamic.zacdn.com/Rex59fAoKIS9KgP-4pZZJnS89qA=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/alowalo-6690-4298252-1.jpg"
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
