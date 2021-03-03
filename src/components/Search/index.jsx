import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './search.module.css';

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <div className={styles.container} ref={searchRef}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.search}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search catalog"
          type="text"
          value={query}
        />
      </form>
    </div>
  );
}
