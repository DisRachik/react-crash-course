import { Fragment, useEffect, useState } from 'react';
import Modal from 'src/components/Modal/Modal';
import NewPost from 'src/components/NewPost/NewPost';
import Post from 'src/components/Post/Post';
import { getPosts } from '../api/mockApi';
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
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const data = await getPosts();

        setPosts(data);
      } catch (e: unknown) {
        console.error((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const addPostHandler = (postData: IPost) => {
    setPosts(prev => [postData, ...prev]);
  };

  return (
    <>
      {isLoading ? (
        <div style={{ textAlign: 'center', color: 'greenyellow' }}>
          <p>Loading posts...</p>
        </div>
      ) : null}
      {posts.length > 0 && !isLoading ? (
        <ul className={s.posts}>
          {posts.map(({ id, author, body }) => (
            <Fragment key={id}>
              <Post author={author} body={body} />
            </Fragment>
          ))}
        </ul>
      ) : null}
      {posts.length === 0 && !isLoading ? (
        <div style={{ textAlign: 'center', color: 'pink' }}>
          <h2>There haven't been posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      ) : null}

      {isPosting ? (
        <Modal onCloseModal={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
    </>
  );
}
