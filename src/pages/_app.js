import '@/styles/index.scss';
import store from '../redux';
import { Provider } from 'react-redux';
import Navbar from '../components/commons/Navbar';
import Footer from '../components/commons/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
