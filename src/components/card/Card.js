import styles from './Card.module.css';

const Card = (props) => {
  return <article className={styles.container}>{props.children}</article>;
};

export default Card;
