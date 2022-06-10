import Card from '../card/Card';
import styles from './Post.module.css';
const Post = ({ post }) => {
  const { username = '', body = '', created_at = '' } = post;
  return (
    <Card>
      <h4>{username}</h4>
      <p>{created_at}</p>
      <p>{body}</p>
    </Card>
  );
};

export default Post;
