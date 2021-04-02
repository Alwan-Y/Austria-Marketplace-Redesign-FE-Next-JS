import Link from 'next/link';

import Button from '../commons/Button';

const CategoryList = () => {
  return (
    <div>
      <div className="container pb-5">
        <div className="row p-5 text-center">
          <div className="col-sm">
            <Link href="/catalog/pria">
              <Button
                type="dark"
                size="lg"
                outline="outline"
                children="Men's Clothes"
                block="block"
              />
            </Link>
          </div>
          <div className="col-sm">
            <Link href="/catalog/wanita">
              <Button
                type="dark"
                size="lg"
                outline="outline"
                children="Woman's Clothes"
                block="block"
              />
            </Link>
          </div>
          <div className="col-sm">
            <Link href="/catalog/anak">
              <Button
                type="dark"
                size="lg"
                outline="outline"
                children="anak Clothes "
                block="block"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
