const Cart = () => {
  return (
    <div>
      <div className="container cart-header cart__margin__2">
        <div className="row mt-5 text-center">
          <div className="col">
            <h3>Your Cart</h3>
            <p>Make sure your goods are paid off in full</p>
          </div>
        </div>
      </div>

      <div className="container">
        <nav>
          <ol className="breadcrumb bg-transparent pl-0 cart__breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart Checkout
            </li>
          </ol>
        </nav>
      </div>

      <div className="checkout">
        <div className="container">
          <div className="row justify-content-between cart__margin">
            <div className="col-lg-6">
              <h3 className="mb-4 cart__color">Your Items</h3>
              <div className="row mb-4">
                <div className="col-4">
                  <h5 className="m-0">Woman shirt</h5>
                  <p className="m-0 cart__small">IDR 100.000</p>
                </div>
                <div className="col-4"></div>
                <div className="col-2 text-right">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <h5 className="m-0">Woman shirt</h5>
                  <p className="m-0 cart__small">IDR 100.000</p>
                </div>
                <div className="col-4"></div>
                <div className="col-2 text-right">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <h5 className="m-0">Men's shirts</h5>
                  <p className="m-0 cart__small">IDR 100.000</p>
                </div>
                <div className="col-4"></div>
                <div className="col-2 text-right">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <h5 className="m-0">Men's shirts</h5>
                  <p className="m-0 cart__small">IDR 100.000</p>
                </div>
                <div className="col-4"></div>
                <div className="col-2 text-right">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className=" rounded-0 cart__checkout__detail">
                <div className="card-body">
                  <h3 className="card-title cart__color">Cost Information</h3>
                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Woman shirt</h6>
                      <small className="cart__small">2 Items</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 200.000
                      </h6>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Men's shirts</h6>
                      <small className="cart__small">2 Items</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 200.000
                      </h6>
                    </div>
                  </div>

                  <hr />

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Courier</h6>
                      <small className="cart__small">JNT Express</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 20.000
                      </h6>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Tax</h6>
                      <small className="cart__small">Negara 20%</small>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        IDR 42.000
                      </h6>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Total Price</h6>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-primary">
                        IDR 462.000
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button type="button" className="btn btn-block black">
                    Cancel
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-warning btn-block text-white"
                    data-toggle="modal"
                    data-target="#checkoutModal"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
