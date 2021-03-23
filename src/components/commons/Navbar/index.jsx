import Link from 'next/link';
import { Heart } from '@/components/icons';
import ROUTES from '@/config/routes'

import Search from '@/components/Search';

const Navbar = () => {
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
              <Link href={`${ROUTES.CATALOG}/mans`}>
                <a className="nav-link">
                  Men
                </a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={`${ROUTES.CATALOG}/womans`}>
                <a className="nav-link" href={ROUTES.HOME}>
                  Women
                </a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link href={`${ROUTES.CATALOG}/kids`}>
                <a className="nav-link" href={ROUTES.HOME}>
                  Kids
                </a>
              </Link>
            </li>
            <li className="navbar__item">
              <Search />
            </li>
          </ul>
          <Link key="3" href="/Cart">
            <a href="/cart" className="nav-link text-white">
              My Cart (<span className="navbar__span">12</span>)
            </a>
          </Link>
          <Link key="2" href="/wishlist" className="nav-link text-white">
            <Heart fill="red" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
