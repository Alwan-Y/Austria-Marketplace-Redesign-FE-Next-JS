import DesignerCard from '../DesignerCard';

const Designer = () => {
  return (
    <div className="designer pb-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h3 className="designer__heading1 text-center">Our Designers</h3>
            <p className="designer__font__paragraph text-center">
              all the clothes that are sold here, are made by the best designers{' '}
            </p>
          </div>
        </div>

        <div className="row">
          <DesignerCard imgPath="img.jpg" title="Hasna Budi" jobs="Designer" />
          <DesignerCard imgPath="img2.jpg" title="Gigih Waskito" jobs="Designer" />
          <DesignerCard imgPath="img3.jpg" title="Gina Karunia" jobs="Designer" />
          <DesignerCard imgPath="img4.jpg" title="Nico Lim" jobs="Designer" />
        </div>
      </div>
    </div>
  );
};

export default Designer;
