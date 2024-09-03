import { ChangeEvent, useState } from 'react';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import s from './PostList.module.css';

const initialState = {
  author: 'Someone',
  body: 'first message',
};

export default function PostList() {
  const [enteredPost, setEnteredPost] = useState(initialState);

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredPost(prev => ({ ...prev, author: event.target.value }));
  };
  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredPost(prev => ({ ...prev, body: event.target.value }));
  };

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />

      <ul className={s.posts}>
        <Post author={enteredPost.author} body={enteredPost.body} />
        <Post author='Rachik' body='second message' />
      </ul>
    </>
  );
}
