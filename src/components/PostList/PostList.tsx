import { useState } from 'react';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import s from './PostList.module.css';

export default function PostList() {
  const [newText, setNewText] = useState('first message');

  return (
    <>
      <NewPost onChange={setNewText} />

      <ul className={s.posts}>
        <Post author='Ihor' body={newText} />
        <Post author='Rachik' body='second message' />
      </ul>
    </>
  );
}
