import classNames from 'classnames';
import { Trash } from '@/components/icons';
import Button from '@/components/commons/Button';
import Link from 'next/link';

const WishlistCard = ({ cols, product, onRemove }) => {
  const { name, img, price, id } = product;

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
        <Link href={`/detail/${id}`}>
          <img className="card-img-top image__cover" src={img} alt={name} />
        </Link>
        <div className="card-body">
          <Link href={`/detail/${id}`}>
            <h5 className="card-title">{name}</h5>
          </Link>
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
