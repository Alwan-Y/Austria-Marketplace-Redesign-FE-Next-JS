import { useState } from 'react';
import { connect } from 'react-redux';
import Action from '../../redux/action';
import Type from '../../redux/type';
import CarouselItem from '../../components/commons/CarouselItem';

const HomePage = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide margin"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="container">
          <CarouselItem
            active="active"
            title="Especially For Muslim Men"
            productDescription="Make your days happier and memorable with new clothes"
            imgPath="image1.jpg"
            classImage="img-fluid-2"
          />
          <CarouselItem 
            title="Especially For Muslim Women"
            productDescription="Make your days happier and memorable with new clothes"
            imgPath="1.png"
            classImage="img-fluid"
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

const mapStateToProps = (state) => {
  const { items, catalog } = state;

  return { items, catalog };
};

const mapDispatchToProps = (setState) => ({
  addItem: (payload) => setState(Action(Type.Items, payload)),
  removeItem: (payload) => setState(Action(Type.Items, payload)),
  addCatalog: (payload) => setState(Action(Type.Items, payload)),
  removeCatalog: (payload) => setState(Action(Type.Items, payload)),
});

export default connect(mapStateToProps)(HomePage);
