import Head from 'next/head';
import Carousel from '../components/Carousel';
import Brands from '../components/Brands';
import CategoryList from '../components/CategoryList';
import Designer from '../components/Designer';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Austria-next</title>
      </Head>

      <Carousel />
      <Brands />
      <CategoryList />
      <Designer />
    </div>
  );
};

export default HomePage;
