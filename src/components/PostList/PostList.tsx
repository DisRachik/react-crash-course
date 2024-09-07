import { Fragment, useEffect, useState } from 'react';

import { getPosts } from 'src/api/mockApi';
import Post from 'src/components/Post/Post';

import s from './PostList.module.css';

export interface IPost {
  id: string;
  author: string;
  body: string;
}

export default function PostList() {
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

  // const addPostHandler = (postData: IPost) => {
  //   setPosts(prev => [postData, ...prev]);
  // };

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
    </>
  );
}
