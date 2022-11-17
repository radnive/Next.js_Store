import styles from './Dropdown.module.css';
import { FC, useState } from "react";
import ChevronIcon from "../icons/chevron_icon/chevron_icon";
import { useIntl } from 'react-intl';

interface DropdownProps {
  items: {
    id: string,
    name: string
  }[],
  selectedIndex: number,
  onChange: (index: number) => void
}

const DropDown: FC<DropdownProps> = ({items, selectedIndex, onChange}) => {
  const intl = useIntl();
  const [isOpen, setOpenState] = useState(false);

  return (
    <div className={styles.dropdown} onClick={() => setOpenState(!isOpen)}>
      <button className={styles.dropdown__selected}>
        {(selectedIndex >= 0)? items[selectedIndex].name : intl.formatMessage({ id: 'products.explore.dropdown.placeholder' })}
        <ChevronIcon flipX={isOpen} />
      </button>

      <div className={`${styles.dropdown__items} ${isOpen? styles.dropdown__items____open : ''}`}>
        <ul>
          {
            items.map((item, index, _) => {
              if(index != selectedIndex) {
                return (
                  <li
                    key={`${item.id}__${index}`}
                    onClick={() => {
                      onChange(index);
                      setOpenState(false);
                    }}
                  >
                    {item.name}
                  </li>
                );
              }
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default DropDown;