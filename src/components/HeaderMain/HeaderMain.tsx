import { Link } from 'react-router-dom';
import { MdMessage, MdPostAdd } from 'react-icons/md';

import s from './HeaderMain.module.css';

export default function HeaderMain() {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>
        <MdMessage />
        React Poster
      </h1>
      <Link className={s.button} to='/create-post'>
        <MdPostAdd />
        New Post
      </Link>
    </header>
  );
}
