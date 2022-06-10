import Card from '../card/Card';
import styles from './PostSkeleton.module.css';
const PostSkeleton = () => {
  return (
    <Card>
      <header>
        <div className={`${styles.bar} ${styles.headerLine}`}></div>
        <div className={`${styles.bar} ${styles.dateLine}`}></div>
      </header>
      <main>
        <div className={`${styles.bar} ${styles.line1}`}></div>
        <div className={`${styles.bar} ${styles.line2}`}></div>
        <div className={`${styles.bar} ${styles.line3}`}></div>
      </main>
    </Card>
  );
};
export default PostSkeleton;
