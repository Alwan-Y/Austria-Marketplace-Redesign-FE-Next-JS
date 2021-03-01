import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ category, name }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-transparent">
        <li className="breadcrumb-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {category ? (
          <li className="breadcrumb-item">
            <Link href={`/catalog/${category}`}>
              <a>{category}</a>
            </Link>
          </li>
        ) : null}
        <li className="breadcrumb-item active" aria-current="page">
          {name}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
