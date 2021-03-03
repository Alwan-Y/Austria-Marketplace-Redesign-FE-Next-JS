// import { getSortedPostsData } from '../../lib/posts'

// const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getSortedPostsData()

import { catalogs } from '../../data/shop.json';

export default (req, res) => {
  const results = req.query.q
    ? catalogs.filter((catalog) =>
        catalog.name.toLowerCase().includes(req.query.q)
      )
    : [];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results }));
};
