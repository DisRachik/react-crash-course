import { Fragment, useState } from 'react';
import Modal from 'src/components/Modal/Modal';
import NewPost from 'src/components/NewPost/NewPost';
import Post from 'src/components/Post/Post';
import s from './PostList.module.css';

interface PostListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

export interface IPost {
  id: string;
  author: string;
  body: string;
}

export default function PostList({ isPosting, onStopPosting }: PostListProps) {
  const [enteredPosts, setEnteredPosts] = useState<IPost[]>([]);

  const addPostHandler = (postData: IPost) => {
    setEnteredPosts(prev => [postData, ...prev]);
  };

  return (
    <>
      {enteredPosts.length ? (
        <ul className={s.posts}>
          {enteredPosts.map(({ id, author, body }) => (
            <Fragment key={id}>
              <Post author={author} body={body} />
            </Fragment>
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: 'center', color: 'pink' }}>
          <h2>There haven't been posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isPosting ? (
        <Modal onCloseModal={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
    </>
  );
}
