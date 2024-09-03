import { ChangeEvent, useState } from 'react';
import Modal from '../Modal/Modal';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import s from './PostList.module.css';

interface PostListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

const initialState = {
  author: 'Someone',
  body: 'first message',
};

export default function PostList({ isPosting, onStopPosting }: PostListProps) {
  const [enteredPost, setEnteredPost] = useState(initialState);

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredPost(prev => ({ ...prev, author: event.target.value }));
  };
  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredPost(prev => ({ ...prev, body: event.target.value }));
  };

  return (
    <>
      <ul className={s.posts}>
        <Post author={enteredPost.author} body={enteredPost.body} />
        <Post author='Rachik' body='second message' />
      </ul>

      {isPosting ? (
        <Modal toggleModal={onStopPosting}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        </Modal>
      ) : null}
    </>
  );
}
