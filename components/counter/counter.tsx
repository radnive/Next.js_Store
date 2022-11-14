import styles from './Counter.module.css';
import { FC } from "react";

interface CounterProps {
  title: String,
  subtitle: String
}

const Counter: FC<CounterProps> = ({title, subtitle}) => {
  return (
    <ul className={styles.counter__main}>
      <li className={styles.counter__title}>{title}</li>
      <li className={styles.counter__subtitle}>{subtitle}</li>
    </ul>
  );
}

export default Counter;