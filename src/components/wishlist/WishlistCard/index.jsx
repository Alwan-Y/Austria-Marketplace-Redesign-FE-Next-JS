import classNames from 'classnames';
import { Trash } from '@/components/icons';
import Button from '@/components/commons/Button';
import Image from 'next/image';

const WishlistCard = ({ cols, product, onRemove }) => {
  const { name, img, price } = product;

  return (
    <div
      className={classNames([
        `col-md-${12 / cols}`,
        `col-lg-${12 / cols}`,
        `mt-2`,
        `mb-2`,
      ])}
    >
      <div className="card border border-white shadow bg-white rounded">
        <img className="card-img-top image__cover" src={img} alt="name" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">Rp. {price}</p>
          <div className="row">
            <div className="col-sm-9 pr-0">
              <Button size="sm" type="outline-success" block={true}>
                Add to Cart
              </Button>
            </div>
            <div className="col-sm-3 pt-1">
              <Trash
                color="red"
                onClick={onRemove}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
