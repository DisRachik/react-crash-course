import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import s from './PostList.module.css';

const initialState = {
  author: 'Someone',
  body: 'first message',
};

export default function PostList() {
  const [enteredPost, setEnteredPost] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModalHandler = () => {
    setModalIsOpen(prev => !prev);
  };

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredPost(prev => ({ ...prev, author: event.target.value }));
  };
  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredPost(prev => ({ ...prev, body: event.target.value }));
  };

  return (
    <>
      <Button onClick={toggleModalHandler} type='button'>
        Add new post
      </Button>

      <ul className={s.posts}>
        <Post author={enteredPost.author} body={enteredPost.body} />
        <Post author='Rachik' body='second message' />
      </ul>

      {modalIsOpen ? (
        <Modal toggleModal={toggleModalHandler}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        </Modal>
      ) : null}
    </>
  );
}
