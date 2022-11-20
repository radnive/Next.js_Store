import styles from './ColorSelector.module.css';
import { FC, useState } from 'react';
import { useIntl } from 'react-intl';

interface ColorSelectorProps {
  colors: string[]
}

const ColorSelector: FC<ColorSelectorProps> = ({colors}) => {
  const intl = useIntl()
  const [selectedIndex, setIndex] = useState(0);
  
  return (
    <>
      <p className={styles.title}>
        { intl.formatMessage({ id: 'selector.color.title' }) }
      </p>
    
      <ul className={styles.colors_list}>
        {
          colors.map((c, i) => (
            <li
              key={`color_item_${i}`}
              data-style={(selectedIndex === i)? 'selected' : 'normal' }
              style={{ background: c }}
              onClick={() => setIndex(i)} />
          ))
        }
      </ul>
    </>
  );
}

export default ColorSelector;