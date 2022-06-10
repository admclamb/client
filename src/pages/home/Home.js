import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import Post from '../../components/post/Post';
import NoPost from '../../components/noPost/NoPost';
import PostSkeleton from '../../components/postSkeleton/PostSkeleton';
import ErrorAlert from '../../components/errorAlert/ErrorAlert';
import { readPosts } from '../../utils/api';
import styles from './Home.module.css';
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors([]);
    const getPosts = async () => {
      try {
        const response = await readPosts();
        setPosts(response);
      } catch (error) {
        errors.push(error);
      }
    };
    getPosts();
  }, []);

  const postList =
    Array.isArray && posts.map((post) => <Post key={post.id} post={post} />);

  if (errors.length === 0 && postList.length === 0) {
    return (
      <section className={styles.container}>
        <PostSkeleton />
        <PostSkeleton />
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <ErrorAlert errors={errors} />
      {(postList.length > 0 && postList) || <NoPost />}
    </section>
  );
};

export default Home;
