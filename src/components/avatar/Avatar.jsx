import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Avatar.module.scss';

export default function Avatar({
  size = 90,
  url = '/images/avatar.png',
  verified = false,
}) {
  useEffect(() => {
    document.documentElement.style.setProperty('--logo-size', size + 'px');
  }, [size]);

  return (
    <div className={classNames(styles.avatar)}>
      <img src={url} alt="" className={classNames(styles.image)} />
      {verified && (
        <img src="/images/verified.svg" className={classNames(styles.badge)} />
      )}
    </div>
  );
}
