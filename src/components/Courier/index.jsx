const Courier = () => {
  return (
    <div>
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
            />
          </div>
          <div className="col-2">
            <img src="img/item1.png" />
          </div>
          <div className="col-9 mt-1">
            <label className="form-check-label" htmlFor="exampleRadios1">
              JNE
              <br />
              IDR 14.000
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
            />
          </div>
          <div className="col-2">
            <img src="img/item1.png" />
          </div>
          <div className="col-9 mt-1">
            <label className="form-check-label" htmlFor="exampleRadios1">
              J&T
              <br />
              IDR 14.000
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courier;
