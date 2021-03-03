import classNames from 'classnames';

const Button = ({
  type,
  size,
  block,
  outline,
  children,
  className,
  ...rest
}) => (
  <button
    type="button"
    className={classNames(
      'button btn',
      { [`btn-outline-${type}`]: outline },
      { [`btn-${type}`]: !outline },
      { [`btn-${size}`]: size },
      { 'btn-block': block },
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
