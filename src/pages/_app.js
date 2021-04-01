import '@/styles/index.scss';
import store from '../redux';
import { Provider } from 'react-redux';
import Navbar from '../components/commons/Navbar';
import Footer from '../components/commons/Footer';
import NavbarBeforeLogin from '../components/commons/NavbarBeforeLogin/';

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('token')) {
      return (
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      );
    }
  }
  return (
    <Provider store={store}>
      <NavbarBeforeLogin />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
