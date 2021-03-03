import Search from '@/components/Search';
import Button from '../Button';

const NavbarBeforeLogin = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="img/32.png" alt="Austria" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase mx-auto">
            <li className="navbar__item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a className="nav-link" href="#">
                Category
              </a>
            </li>
            <li className="navbar__item">
              <a className="nav-link" href="#">
                Designer
              </a>
            </li>
            <li className="navbar__item">
              <Search />
            </li>
          </ul>
          <Button type="light" outline="outline" children="Register" />
          <Button
            type="primary"
            outline="outline"
            children="Login"
            className="ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarBeforeLogin;
