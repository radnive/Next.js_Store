import styles from "./ChevronIcon.module.css";
import { FC } from "react";

interface ChevronIconProps {
  flipX: boolean
}

const ChevronIcon: FC<ChevronIconProps> = ({flipX}) => {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.main}
      style={{ transform: flipX? 'rotateZ(-180deg)' : 'rotateZ(0deg)' }}
    >
      <path d="M12 13.1717L16.95 8.22168L18.364 9.63568L12 15.9997L5.63599 9.63568L7.04999 8.22168L12 13.1717Z" />
    </svg>
  );
}

export default ChevronIcon;