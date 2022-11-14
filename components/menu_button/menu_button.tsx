import {useState, useRef, useEffect, FC} from "react";
import styles from './MenuButton.module.css';
import { gsap } from "gsap";

interface MenuButtonProps {
  isOpen: boolean,
  setMenuState: (isOpen: boolean) => void
}

const MenuButton: FC<MenuButtonProps> = ({isOpen, setMenuState}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  const [isOnRender, setRenderState] = useState(true);

  useEffect(() => {
    const q = gsap.utils.selector(mainRef);

    timeline.current.to(
      q('.menu_button__bar--first'),
      {
        duration: .5,
        keyframes: {
          '0%': {
            y: '0px',
            rotateZ: 0
          },
          '50%': {
            y: '8px',
            rotateZ: 0
          },
          '75%': {
            y: '8px',
            rotateZ: 0
          },
          '100%': {
            y: '8px',
            rotateZ: 45
          }
        }
      },
      0
    ).to(
      q('.menu_button__bar--third'),
      {
        duration: .5,
        keyframes: {
          '0%': {
            y: '0px',
            rotateZ: 0
          },
          '50%': {
            y: '-8px',
            rotateZ: 0
          },
          '75%': {
            y: '-8px',
            rotateZ: 0
          },
          '100%': {
            y: '-8px',
            rotateZ: -45
          }
        }
      },
      0
    ).to(
      q('.menu_button__bar--second'),
      {
        duration: .1,
        opacity: 0,
        ease: 'linear'
      },
      '<30%'
    );
  });

  useEffect(() => {
    if(!isOnRender) {
      if(!isOpen) {
        timeline.current.reverse();
      } else {
        timeline.current.restart();
      }
    } else {
      setRenderState(false);
    }
  }, [isOpen]);

  return (
    <div ref={mainRef} className={styles.menu_button} onClick={() => setMenuState(!isOpen)}>
      <div className={`${styles.menu_button__bar} menu_button__bar--first`} />
      <div className={`${styles.menu_button__bar} menu_button__bar--second`} />
      <div className={`${styles.menu_button__bar} menu_button__bar--third`} />
    </div>
  );
}

export default MenuButton;