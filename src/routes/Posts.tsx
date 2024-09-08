import { Outlet } from 'react-router-dom';
import { getPosts } from 'src/api/mockApi';

import PostList from 'src/components/PostList/PostList';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    return await getPosts();
  } catch (e: unknown) {
    console.error((e as Error).message);
  }
};

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}
