import Button from '../commons/Button';

const CategoryList = () => {
  return (
    <div>
      <div className="container pb-5">
        <div className="row p-5 text-center">
          <div className="col-sm">
            <Button
              type="dark"
              size="lg"
              outline="outline"
              children="Men's Clothes"
              block="block"
            />
          </div>
          <div className="col-sm">
            <Button
              type="dark"
              size="lg"
              outline="outline"
              children="Woman's Clothes"
              block="block"
            />
          </div>
          <div className="col-sm">
            <Button
              type="dark"
              size="lg"
              outline="outline"
              children="Kids Clothes "
              block="block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
