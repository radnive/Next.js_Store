import styles from './LikeButton.module.css';
import { FC, useState } from "react";
import PartialBy from '../../models/PartialBy';

interface LikeButtonProps {
  className: string,
  liked: boolean
}

type LikeButtonPropsExludeClassName = PartialBy<LikeButtonProps, 'className'>

const LikeButton: FC<LikeButtonPropsExludeClassName> = ({className, liked}) => {
  let [isLiked, setLike] = useState(liked);

  return (
    <button className={`${styles.like_button} ${className}`} onClick={() => setLike(!isLiked)}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path data-vector-color='stroke' d="M20.4323 12.1539L12 20.5862L3.71798 12.3041L3.58006 12.1433C2.67684 11.0903 2.20492 9.73491 2.25886 8.34866C2.3128 6.96241 2.88862 5.64775 3.87092 4.66812C4.85323 3.68849 6.16945 3.11626 7.55585 3.0661C8.94224 3.01594 10.2964 3.49155 11.3469 4.39764L12 4.96096L12.6532 4.39764C13.7037 3.49155 15.0578 3.01594 16.4442 3.0661C17.8306 3.11626 19.1468 3.68849 20.1291 4.66812C21.1114 5.64775 21.6873 6.96241 21.7412 8.34866C21.7951 9.73491 21.3232 11.0903 20.42 12.1433L20.4323 12.1539ZM21.172 12.7884L21.179 12.7944L21.1785 12.7949L21.172 12.7884Z" strokeOpacity="0.16" strokeWidth="2"/>
        <path fill="#FF3B3B" opacity={(isLiked)? 1 : 0} d="M21.179 12.7944L21.192 12.8084L12 22.0004L2.80803 12.8084L2.82103 12.7944C1.75359 11.5499 1.19587 9.94807 1.25962 8.30977C1.32337 6.67148 2.00388 5.11779 3.16478 3.96005C4.32569 2.8023 5.88123 2.12603 7.51969 2.06675C9.15815 2.00747 10.7585 2.56956 12 3.64039C13.2416 2.56956 14.8419 2.00747 16.4804 2.06675C18.1188 2.12603 19.6744 2.8023 20.8353 3.96005C21.9962 5.11779 22.6767 6.67148 22.7404 8.30977C22.8042 9.94807 22.2465 11.5499 21.179 12.7944V12.7944Z" />
      </svg>
    </button>
  );
}

export default LikeButton;