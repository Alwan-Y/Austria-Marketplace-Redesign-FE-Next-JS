import Button from '../commons/Button';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

test('Button renders correctly', () => {
  const { container } = render(<Button type="primary">Submit</Button>);

  expect(container).toMatchSnapshot();
});

test('Button primary has correct classnames', () => {
  const { container } = render(<Button type="primary">Submit</Button>);

  expect(container.firstChild).toHaveClass('btn');
  expect(container.firstChild).toHaveClass('btn-primary');
});

test('Trigger onClick while click the button', () => {
  const onClick = jest.fn();
  render(
    <Button type="primary" onClick={onClick}>
      Submit
    </Button>
  );

  userEvent.click(screen.getByText('Submit'));
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Button Outline', () => {
  const { container } = render(
    <Button className="btn btn-outline-primary">Submit</Button>
  );

  expect(container.firstChild).toHaveClass('btn-outline-primary');
});

test('Button size', () => {
  const {container} = render(<Button className="btn btn-lg">Submit</Button>)

  expect(container.firstChild).toHaveClass('btn btn-lg')
})

test('Button Block', () => {
  const {container} = render(<Button className="btn btn-block">Submit</Button>)

  expect(container.firstChild).toHaveClass('btn btn-block')
})


