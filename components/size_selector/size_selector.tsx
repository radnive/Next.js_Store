import { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import styles from './SizeSelector.module.css';

interface SizeSelectorProps {
  sizes: string[]
}

const SizeSelector: FC<SizeSelectorProps> = ({sizes}) => {
  const intl = useIntl();
  const [selectedIndex, setIndex] = useState(0);
  
  return (
    <>
      <p className={styles.title}>
        { intl.formatMessage({ id: 'selector.size.title' }) }
      </p>
    
      <ul className={styles.sizes_list}>
        {
          sizes.map((s, i) => (
            <li
              key={`size_item_${i}`}
              data-style={(i === selectedIndex)? 'selected' : 'normal'}
              onClick={() => setIndex(i)}>
                {s}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default SizeSelector;