import type { ActionFunctionArgs } from 'react-router-dom';
import { Form, Link, redirect } from 'react-router-dom';

import { addPost } from 'src/api/mockApi';

import Button from 'src/components/Button/Button';
import Modal from 'src/components/Modal/Modal';

import type { IPost } from 'src/components/PostList/PostList';
import s from './NewPost.module.css';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const newPost = Object.fromEntries(formData) as unknown as IPost;
  try {
    await addPost(newPost);
    return redirect('/');
  } catch (e: unknown) {
    console.error((e as Error).message);
  }
};

export default function NewPost() {
  return (
    <Modal>
      <Form method='post' className={s.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' required rows={3} name='body' />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input id='name' required type='text' name='author' />
        </p>
        <div className={s.actions}>
          <Link to='..' type='button' className={s.button}>
            Cancel
          </Link>
          <Button className={s.button}>Submit</Button>
        </div>
      </Form>
    </Modal>
  );
}
