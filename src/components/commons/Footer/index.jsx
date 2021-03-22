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
                        <div className="col-5">
                            <div className="badewe">
                                <img src="/b.svg" alt=""/><img src="/adewe.svg" alt=""/>
                            </div>
                            <br/>
                            <p>Sebagai Pusat Fashion Gimana Aing, kami menciptakan kemungkinan-kemungkinan fashion tanpa batas dan
                                cara memperluas jangkauan produk mulai produk internasional hingga produk lokal berkualitas. Kami 
                                menjadikan citarasa anda sebagai pusatnya. Fashion Aing Gimana Aing.
                            </p>
                        </div>
                        <div className="col-2">
                            <h6 className="head">INFORMASI</h6>
                            <a>Tentang Kami</a>
                            <br/>
                            <a>Syarat Penggunaan</a>
                            <br/>
                            <a>Ketentuan Privasi</a>
                            <br/>
                            <a>Kontak Kami</a>
                        </div>
                        <div className="col-2">
                            <h6 className="head">BANTUAN</h6>
                            <a>Bayar di Tempat</a>
                            <br/>
                            <a>Cara Pemesanan</a>
                            <br/>
                            <a>Ketentuan Pengembalian</a>
                            <br/>
                            <a>Ketentuan Retur Produk</a>
                        </div>
                        <div className="col-3">
                            <h6 className="justify-text-center head">TEMUKAN KAMI</h6>
                            <Link href="https://facebook.com">
                                <a target="_blank"><img src="/facebook.svg" alt="facebook" className="pl-4"/></a>
                            </Link>
                            <Link href="https://instagram.com">
                                <a target="_blank"><img src="/instagram.svg" alt="instagram" className="pl-2"/></a>
                            </Link>
                            <br/>
                            <Link href="https://twitter.com">
                                <a target="_blank"><img src="/twitter.svg" alt="twitter" className="pl-4 pt-2"/></a>
                            </Link>
                            <Link href="https://pinterest.com">
                                <a target="_blank"><img src="/pinterest.svg" alt="pinterest" className="pl-2 pt-2"/></a>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7"></div>
                        <dic className="col-2">
                            <img src="/car.svg" alt="car" className="pr-2"/><a>Gratis Ongkir</a>
                        </dic>
                        <dic className="col-3">
                            <img src="/cod.svg" alt="cod" className="pr-2"/><a>Bayar di Tempat</a>
                        </dic>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h6 className="subhead">Anda punya pertanyaan? Kami siap membantu</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <a>Kontak | Bantuan</a>
                        </div>
                        <div className="col-5">
                            <a>Tentang Kami | Kebijakan Privasi | Persyaratan Ketentuan</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default Footer;
