import { type ChangeEvent, FormEvent, useState } from 'react';
import { createRandomId } from 'src/helper/createRandomId';
import Button from '../Button/Button';
import { IPost } from '../PostList/PostList';
import s from './NewPost.module.css';

interface NewPostProps {
  onCancel: () => void;
  onAddPost: (value: IPost) => void;
}

export default function NewPost({ onCancel, onAddPost }: NewPostProps) {
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredBody, setEnteredBody] = useState('');

  const authorChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(evt.target.value);
  };
  const bodyChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(evt.target.value);
  };

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!enteredAuthor && !enteredBody) {
      alert('Entered your post and your name!');
      return;
    }

    onAddPost({
      id: createRandomId(),
      author: enteredAuthor,
      body: enteredBody,
    });
    onCancel();
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input id='name' required type='text' onChange={authorChangeHandler} />
      </p>

      <div className={s.actions}>
        <Button type='button' className={s.button} onClick={onCancel}>
          Cancel
        </Button>
        <Button className={s.button}>Submit</Button>
      </div>
    </form>
  );
}
