import Link from 'next/link';
import { Heart } from '@/components/icons';
import ROUTES from '@/config/routes';
import { connect } from 'react-redux';
import Search from '@/components/Search';
import Button from '@/components/commons/Button'
import fire from '@/config/Firebase'
import { useRouter } from 'next/router';

const Navbar = ({ items }) => {
  const router = useRouter();
  
  let totalItems = 0;
  if (items) {
    items.forEach((val) => {
      totalItems = totalItems + val.quantity;
    });
  }

  const logout = async () => {
    const userLogout = await fire.auth().signOut()

      localStorage.removeItem('token')
      alert('Succes Logout');
      router.push('/');
  }

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
          data-target="#  navbarNav"
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
            <li>
            <Button
              type="primary"
              outline="outline"
              children="Logout"
              onClick={logout}
              className="navbar__login2"
            />
            </li>
          </ul>
          <Link key="3" href="/Cart">
            <a href="/cart" className="nav-link text-white navbar__cart">
              My Cart (<span className="navbar__span">{totalItems}</span>)
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

const mapStateToProps = (state) => {
  const { cart } = state;

  return cart;
};

export default connect(mapStateToProps)(Navbar);
