const DesignerCard = ({ imgPath, title, jobs }) => {
  return (
    <div className="col-6 col-sm-3 text-center">
      <div className="figure">
        <img src={imgPath} className="figure-img img-fluid" />
        <div className="figure-caption text-center">
          <h5 className="designer__heading5">{title}</h5>
          <p>{jobs}</p>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;
