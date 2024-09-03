import { MdMessage, MdPostAdd } from 'react-icons/md';
import Button from '../Button/Button';
import s from './HeaderMain.module.css';

interface HeaderMainProps {
  onCreatePost: () => void;
}

export default function HeaderMain({ onCreatePost }: HeaderMainProps) {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>
        <MdMessage />
        React Poster
      </h1>
      <Button className={s.button} onClick={onCreatePost} type='button'>
        <MdPostAdd />
        New Post
      </Button>
    </header>
  );
}
