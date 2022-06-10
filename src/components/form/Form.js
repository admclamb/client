import styles from './Form.module.css';
const Form = (props) => {
  return (
    <form className={styles.form}>
      {props.children}
      <button type="submit" onSubmit={props.submit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
