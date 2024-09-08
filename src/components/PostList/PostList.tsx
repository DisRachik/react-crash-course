import { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from 'src/components/Post/Post';

import s from './PostList.module.css';

export interface IPost {
  id?: string;
  author: string;
  body: string;
}

export default function PostList() {
  const posts = useLoaderData() as IPost[];

  return (
    <>
      {posts.length ? (
        <ul className={s.posts}>
          {posts.map(({ id, author, body }) => (
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
    </>
  );
}
