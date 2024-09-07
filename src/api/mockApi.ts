import { IPost } from '../components/PostList/PostList';

enum Method {
  GET = 'GET',
  POST = 'POST',
}

const API_URL = 'https://66d9bfe24ad2f6b8ed55e4d9.mockapi.io/posts';

const request = async (method: Method, body?: IPost): Promise<unknown> => {
  try {
    const res = await fetch(API_URL, {
      method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error('Something went wrong!');
    }
    return await res.json();
  } catch (e: unknown) {
    throw new Error(`Something went wrong! ${(e as Error).message}`);
  }
};

export const getPosts = async (): Promise<IPost[]> => {
  return (await request(Method.GET)) as IPost[];
};

export const addPost = async (newPost: IPost): Promise<void> => {
  await request(Method.POST, newPost);
};
