import { useEffect, useState } from 'react';
import styles from './ErrorAlert.module.css';

const ErrorAlert = ({ errors }) => {
  const [close, setClose] = useState(false);
  useEffect(() => {
    setClose(false);
  }, [errors]);
  return (
    !close &&
    errors.length > 0 && (
      <div className={styles.container}>
        {errors.join(', ')}
        <button className={styles.button} onClick={() => setClose(true)}>
          X
        </button>
      </div>
    )
  );
};

export default ErrorAlert;
