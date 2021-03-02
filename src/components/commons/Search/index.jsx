import Button from '../Button';

const Search = () => {
  return (
    <div className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button type="primary" outline="outline" children="Search" />
    </div>
  );
};

export default Search;
