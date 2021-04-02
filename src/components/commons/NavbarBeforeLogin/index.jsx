import Search from '@/components/Search';
import Button from '../Button';
import Link from 'next/link';
import ROUTES from '@/config/routes';

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
            <li className="navbar__item">
              <Link href={ROUTES.HOME}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={`${ROUTES.CATALOG}/pria`}>
                <a className="nav-link">Pria</a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={`${ROUTES.CATALOG}/wanita`}>
                <a className="nav-link" href={ROUTES.HOME}>
                  Wanita
                </a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={`${ROUTES.CATALOG}/anak`}>
                <a className="nav-link" href={ROUTES.HOME}>
                  Anak
                </a>
              </Link>
            </li>
            <li className="navbar__item">
              <Search />
            </li>
          </ul>
          <Link href={ROUTES.REGISTER}>
            <Button type="light" outline="outline" children="Register" />
          </Link>
          <Link href={ROUTES.LOGIN}>
            <Button
              type="primary"
              outline="outline"
              children="Login"
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarBeforeLogin;
