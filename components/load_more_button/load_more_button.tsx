import styles from './LoadMoreButton.module.css';
import { FC, ReactNode } from "react";
import { useIntl } from 'react-intl';
import { IntlShape } from '@formatjs/intl';
import LoadingState from '../../models/loading_state';
import CircularLoading from '../circular_loading/circular_loading';

interface LoadMoreButtonProps {
  status: LoadingState,
  onClick: () => void
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({status, onClick}) => {
  const intl = useIntl();

  return (
    <button
      className={styles.load_more_button}
      data-button-state={(status === LoadingState.error)? 'error' : 'normal'}
      onClick={async () => {
        if (status !== LoadingState.loading && status != LoadingState.endOfList) {
          await onClick();
        }
      }}
    >
      {getView(intl as IntlShape<string>, status)}
    </button>
  );
}

const getView = (intl: IntlShape<string>, status: LoadingState): ReactNode => {
  switch (status) {
    case LoadingState.normal:
      return <p>{ intl.formatMessage({ id: 'loadmore.button.normal' }) }</p>;

    case LoadingState.loading:
      return (
        <ul className={styles.load_more_button__loading}>
          <li><CircularLoading /></li>
          <li>{ intl.formatMessage({ id: 'loadmore.button.loadingData' }) }</li>
        </ul>
      );

    case LoadingState.loadingMore:
      return (
        <ul className={styles.load_more_button__loading}>
          <li><CircularLoading /></li>
          <li>{ intl.formatMessage({ id: 'loadmore.button.loadingMore' }) }</li>
        </ul>
      );

    case LoadingState.endOfList:
      return <p>{ intl.formatMessage({ id: 'loadmore.button.endOfList' }) }</p>;

    case LoadingState.error:
      return <p>{ intl.formatMessage({ id: 'loadmore.button.error' }) }</p>;
  }
}

export default LoadMoreButton;