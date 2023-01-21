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
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return null;
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
export default function Card({
  name = '',
  likes = 0,
  mediaUrl = '',
  user = { avatar: { url: '' }, verified: false },
  price = '',
  currency = '',
  timeLeft = 10000,
}) {
  return (
    <MUICard sx={{ maxWidth: 300 }} className={classNames(styles.card)}>
      <CardHeader avatar={<Avatar size={33} verified={true} />} />
      {!!timeLeft && (
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
      {!!timeLeft && (
        <div className={classNames(styles.timer)}>
          <Countdown
            date={Date.now() + timeLeft}
            renderer={renderer}
          ></Countdown>
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
