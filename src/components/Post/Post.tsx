import s from './Post.module.css';

interface PostProps {
  author: string;
  body: string;
}

export default function Post({ author, body }: PostProps) {
  return (
    <li className={s.post}>
      <p className={s.author}>{author}</p>
      <p className={s.text}>{body}</p>
    </li>
  );
}
