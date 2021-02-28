import classNames from 'classnames'
import { Trash } from '@/components/icons'
import Button from '@/components/commons/Button'
import Image from 'next/image'


const WishlistCard = ({ cols, product, onRemove }) => {
  const { name, url, price } = product
  
  return (
  <div className={classNames([
    `col-md-${12/cols}`,
    `col-lg-${12/cols}`,
    `mt-2`,
    `mb-2`
  ])}>
    <div className="card border border-white shadow bg-white rounded">
      <Image width={750} height={750} className="card-img-top image__cover" src={url} alt="name" />
        <div className="card-body">
          <p className="card-text">
            {name}
          </p>
          <div className="row">
            <div className="col-sm-9 pr-0">
              <Button 
                size="sm" 
                type="outline-success"
                block={true}
              >
                Add to Cart
              </Button>
            </div>     
            <div className="col-sm-3 pt-1" style={{ cursor: "pointer" }} onClick={onRemove}>
              <Trash color="red"/> 
            </div>                       
          </div>                  
        </div>
    </div>
  </div>
)}

export default WishlistCard