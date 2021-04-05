import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="Footer container-fluid text-white foot-container">
        <div className="container ">
          <div className="row">
            <div className="col-5"></div>
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xl-6">
              <div className="badewe">
                <img src="/b.svg" alt="" />
                <img src="/adewe.svg" alt="" />
              </div>
              <br />
              <p>
                Sebagai Pusat Fashion Gimana Aing, kami menciptakan
                kemungkinan-kemungkinan fashion tanpa batas dan cara memperluas
                jangkauan produk mulai produk internasional hingga produk lokal
                berkualitas. Kami menjadikan citarasa anda sebagai pusatnya.
                Fashion Aing Gimana Aing.
              </p>
            </div>
            <div className="col-md-2 col-sm-6 col-xl-2">
              <h6 className="head Footer__h1">INFORMASI</h6>
              <a>Tentang Kami</a>
              <br />
              <a>Syarat Penggunaan</a>
              <br />
              <a>Ketentuan Privasi</a>
              <br />
              <a>Kontak Kami</a>
            </div>
            <div className="col-md-2 col-sm-6 col-xl-2">
              <h6 className="head Footer__h2">BANTUAN</h6>
              <a>Bayar di Tempat</a>
              <br />
              <a>Cara Pemesanan</a>
              <br />
              <a>Ketentuan Pengembalian</a>
              <br />
              <a>Ketentuan Retur Produk</a>
            </div>
            <div className="col-md-3 col-sm col-xl-2">
              <h6 className="head Footer__h3">TEMUKAN KAMI</h6>
              <Link href="https://facebook.com">
                <a target="_blank">
                  <img src="/facebook.svg" alt="facebook" className="pl-4" />
                </a>
              </Link>
              <Link href="https://instagram.com">
                <a target="_blank">
                  <img src="/instagram.svg" alt="instagram" className="pl-2" />
                </a>
              </Link>
              <br />
              <Link href="https://twitter.com">
                <a target="_blank">
                  <img src="/twitter.svg" alt="twitter" className="pl-4 pt-2" />
                </a>
              </Link>
              <Link href="https://pinterest.com">
                <a target="_blank">
                  <img
                    src="/pinterest.svg"
                    alt="pinterest"
                    className="pl-2 pt-2"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="row Footer__h5">
            <div className="col-md col-sm"></div>
            <dic className="col-md col-sm">
              <img src="/car.svg" alt="car" className="pr-2" />
              <a>Gratis Ongkir</a>
            </dic>
            <dic className="col-md col-sm">
              <img src="/cod.svg" alt="cod" className="pr-2" />
              <a>Bayar di Tempat</a>
            </dic>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h6 className="subhead Footer__h4">
                Anda punya pertanyaan? Kami siap membantu
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-sm-6">
              <a>Kontak | Bantuan</a>
            </div>
            <div className="col-5 col-sm-6">
              <a>Tentang Kami | Kebijakan Privasi | Persyaratan Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
