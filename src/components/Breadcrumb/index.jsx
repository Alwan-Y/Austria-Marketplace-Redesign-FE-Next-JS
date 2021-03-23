import React from 'react';
import Link from 'next/link';
import ROUTES from '@/config/routes';

const Breadcrumb = ({ category, name }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-transparent">
        <li className="breadcrumb-item">
          <Link href={ROUTES.HOME}>
            <a>Home</a>
          </Link>
        </li>
        {category ? (
          <li className="breadcrumb-item">
            <Link href={`${ROUTES.CATALOG}/${category}`}>
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
