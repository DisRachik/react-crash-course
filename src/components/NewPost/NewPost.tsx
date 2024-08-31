import { ChangeEvent } from 'react';
import s from './NewPost.module.css';

interface NewPostProps {
  onChange: (value: string) => void;
}

export default function NewPost({ onChange }: NewPostProps) {
  const changeBodyHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    console.log(value);

    onChange(value);
  };

  return (
    <form className={s.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input id='name' required type='text' />
      </p>
    </form>
  );
}
