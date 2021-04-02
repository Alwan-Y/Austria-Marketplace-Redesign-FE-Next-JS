import Head from 'next/head';
import Carousel from '../components/Carousel';
import Brands from '../components/Brands';
import Designer from '../components/Designer';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Austria-next</title>
      </Head>
  
      <Carousel />
      <Brands />
      <div className="container mt-5 mb-5">
      <h3 className="designer__heading1 text-center mt-5 mb-5">Trending Now</h3>
        <div className="row">
          <Card
            id2="7d90769a-78c6-11eb-9439-0242ac130002"
            thumb2="catalogSvg/pria1.svg"
            title2="Baju koko Hitam"
            price2="500"
          />
          <Card
            id2="3f23b862-78c7-11eb-9439-0242ac130002"
            thumb2="catalogSvg/wanita3.svg"
            title2="Kaos Wanita"
            price2="100000"
          />
          <Card
            id2="20d95186-78cd-11eb-9439-0242ac130002"
            thumb2="catalogSvg/anak6.svg"
            title2="Baju Anak"
            price2="15000"
          />
        </div>
      </div>
      <Designer />
    </div>
  );
};

export default HomePage;
