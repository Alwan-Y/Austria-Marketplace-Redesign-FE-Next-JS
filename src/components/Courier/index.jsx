const Courier = ({ onClickJNE, onClickJNT }) => {
  let jne = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(12000);
  let jnt = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(14000);

  return (
    <div className="col-lg mb-5">
      <div className="form-check">
        <div className="row">
          <div className="col-1">
            <input
              className="form-check-input mt-4"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              defaultChecked
              onClick={onClickJNE}
            />
          </div>
          <div className="col-2">
            <img src="img/jne.jpg" />
          </div>
          <div className="col-9 mt-1">
            <label className="form-check-label" htmlFor="exampleRadios1">
              JNE
              <br />
              {jne}
            </label>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-1">
            <input
              className="form-check-input mt-4"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              defaultChecked
              onClick={onClickJNT}
            />
          </div>
          <div className="col-2">
            <img src="img/jnt.jpg" />
          </div>
          <div className="col-9 mt-1">
            <label className="form-check-label" htmlFor="exampleRadios1">
              J&T
              <br />
              {jnt}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courier;
