import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'src/index.css';
import NewPost from 'src/routes/NewPost/NewPost.tsx';
import Posts from 'src/routes/Posts.tsx';
import RootLayout from 'src/routes/RootLayout.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Posts />,
          children: [{ path: '/create-post', element: <NewPost /> }],
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
