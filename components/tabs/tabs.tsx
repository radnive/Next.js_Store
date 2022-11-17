import styles from './Tabs.module.css';
import { FC } from "react";

interface TabsProps {
  items: {
    id: string,
    name: string
  }[],
  selectedIndex: number,
  onChange: (index: number) => void
}

const Tabs: FC<TabsProps> = ({items, selectedIndex, onChange}) => {
  return (
    <ul className={styles.tabs}>
      {
        items.map((item, index) => (
          <li
            key={`${item.id}__${index}`}
            data-tab-status={(selectedIndex === index)? 'selected' : 'normal'}
            onClick={() => onChange(index)}
          >
            {item.name}
          </li>
        ))
      }
    </ul>
  );
}

export default Tabs;