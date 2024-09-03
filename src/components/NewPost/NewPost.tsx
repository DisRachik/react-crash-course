import { ChangeEvent } from 'react';
import s from './NewPost.module.css';

interface NewPostProps {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function NewPost({ onAuthorChange, onBodyChange }: NewPostProps) {
  return (
    <form className={s.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input id='name' required type='text' onChange={onAuthorChange} />
      </p>
    </form>
  );
}
