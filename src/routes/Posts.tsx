import { Outlet } from 'react-router-dom';

import PostList from 'src/components/PostList/PostList';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
