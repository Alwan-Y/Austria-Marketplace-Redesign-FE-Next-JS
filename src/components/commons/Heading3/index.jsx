import classNames from 'classnames';

const Heading3 = ({ className, children }) => {
  return <h3 className={classNames(className)}>{children}</h3>;
};

export default Heading3;
