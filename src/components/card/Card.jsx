import { useState, useEffect, useCallback } from 'react';
import millify from 'millify';

import {
  Card as MUICard,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';

import Avatar from '../avatar/Avatar';

import styles from './Card.module.scss';
import classNames from 'classnames';

export default function Card({
  name = '',
  likes = 0,
  mediaUrl = '',
  user = { avatar: { url: '' }, verified: false },
  price = '',
  currency = '',
  timeLeft = 0,
}) {
  const [time, setTime] = useState(1000);

  useEffect(() => {
    let interval;
    if (time) {
      interval = setInterval(() => {
        setTime((state) => state - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, []);

  const getReturnValues = useCallback((countDown) => {
    const days = Math.floor(countDown / (60 * 60 * 24));
    const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((countDown % (60 * 60)) / 60);
    const seconds = countDown % 60;
    return [days, hours, minutes, seconds];
  }, []);

  return (
    <MUICard sx={{ maxWidth: 300 }} className={classNames(styles.card)}>
      <CardHeader avatar={<Avatar size={33} verified={true} />} />
      {!!time && (
        <div className={classNames(styles.badge)}>
          <CircleIcon
            sx={{
              color: '#181828',
              width: '1vw',
              margin: '0 5px 0 0px',
            }}
          />
          <p>LIVE</p>
        </div>
      )}
      <CardMedia
        className={classNames(styles.media)}
        component="img"
        image="/images/nft.jpg"
        alt=""
        height={300}
      />
      {!!time && (
        <div className={classNames(styles.timer)}>
          {getReturnValues(time).join(' : ')}
        </div>
      )}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3 className={classNames(styles.title)}>{name}</h3>
          <span
            className={classNames(styles.price)}
          >{`${price} ${currency}`}</span>
        </div>
        <Button
          sx={{
            maxWidth: 50,
            color: '#24f25e',
            border: '1px solid #24f25e',
            borderRadius: 100,
            fontWeight: 700,
          }}
          variant="outlined"
          startIcon={<Favorite />}
          className={classNames(styles.likes)}
        >
          {millify(likes)}
        </Button>
      </CardContent>
    </MUICard>
  );
}
