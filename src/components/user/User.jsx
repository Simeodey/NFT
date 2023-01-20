import * as React from 'react';

// components
import Avatar from '../avatar/Avatar';

// styles
import styles from './User.module.scss';
import classNames from 'classnames';
const empty_string = '';
export default function User({
  name = empty_string,
  info = empty_string,
  avatar = empty_string,
  size = 55,
  verified = false,
}) {
  return (
    <div className={classNames(styles.user)}>
      <Avatar props={{ avatar, size, verified }}></Avatar>
      <div className={classNames(styles.userTextContainer)}>
        <span className={classNames(styles.name)}>{name}</span>
        <span className={classNames(styles.info)}>{info}</span>
      </div>
    </div>
  );
}
