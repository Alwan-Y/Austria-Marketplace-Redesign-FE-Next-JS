import CarouselItem from '../commons/CarouselItem';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

test('Carousel Item renders correctly', () => {
  const { container } = render(<CarouselItem></CarouselItem>);

  expect(container).toMatchSnapshot();
});

test('Carousel have class carousel-item', () => {
  const { container } = render(
    <CarouselItem className="carousel-item"></CarouselItem>
  );

  expect(container.firstChild).toHaveClass('carousel-item');
});

test('Carousel have class active carousel-item', () => {
  const { container } = render(
    <CarouselItem className="carousel-item " active="active"></CarouselItem>
  );

  expect(container.firstChild).toHaveClass('carousel-item active');
});

test('Carousel have class justify-content-center', () => {
  const { container } = render(
    <CarouselItem
      className="justify-content-center"
      active="active"
    ></CarouselItem>
  );

  expect(container.firstElementChild).toHaveClass('carousel-item active');
});
