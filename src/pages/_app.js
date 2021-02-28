import '@/styles/index.scss';
import store from '../redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Router>
        <Component {...pageProps} />
      </Router>
    </Provider>
  );
}

export default MyApp;
