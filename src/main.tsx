/* eslint-disable react-refresh/only-export-components */
import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadComponent from 'src/components/LoadComponent/LoadComponent';
import 'src/index.css';
import { action as newPostAction } from 'src/routes/NewPost/NewPost.tsx';
import { loader as postsLoader } from 'src/routes/Posts.tsx';
import RootLayout from 'src/routes/RootLayout.tsx';

const Posts = lazy(() => import('src/routes/Posts.tsx'));
const NewPost = lazy(() => import('src/routes/NewPost/NewPost.tsx'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          loader: postsLoader,
          element: (
            <Suspense fallback={<LoadComponent />}>
              <Posts />
            </Suspense>
          ),
          children: [{ path: '/create-post', element: <NewPost />, action: newPostAction }],
        },
      ],
    },
  ],
  { basename: '/react-crash-course' }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
