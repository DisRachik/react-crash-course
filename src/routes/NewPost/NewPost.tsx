import { type ChangeEvent, FormEvent, useState } from 'react';

import { addPost } from 'src/api/mockApi';
import { createRandomId } from 'src/helper/createRandomId';

import Button from 'src/components/Button/Button';
import Modal from 'src/components/Modal/Modal';

import { Link } from 'react-router-dom';
import s from './NewPost.module.css';

// interface NewPostProps {
//   onAddPost?: (value: IPost) => void;
// }

export default function NewPost() {
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredBody, setEnteredBody] = useState('');

  const authorChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(evt.target.value);
  };
  const bodyChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(evt.target.value);
  };

  const submitHandler = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!enteredAuthor && !enteredBody) {
      alert('Entered your post and your name!');
      return;
    }
    const newPost = {
      id: createRandomId(),
      author: enteredAuthor,
      body: enteredBody,
    };

    try {
      await addPost(newPost);
      // onAddPost(newPost);
      // onCancel();
    } catch (e: unknown) {
      console.error((e as Error).message);
    }
  };

  return (
    <Modal>
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
          <Link to='..' type='button' className={s.button}>
            Cancel
          </Link>
          <Button className={s.button}>Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
