import * as React from 'react';
import classNames from 'classnames';
import styles from './AuSctions.module.scss';

import { Select, Grid, MenuItem, Box, Container } from '@mui/material';
import Card from '../card/Card';

export default function Trending({ cards = [] }) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between">
          <h1 className={classNames(styles.header)}>🔥 Live Actions</h1>
          <Select
            sx={{
              width: '200px',
              borderRadius: '10px',
            }}
          >
            <MenuItem value={1}>This week</MenuItem>
          </Select>
        </Box>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={3} key={card.name + index}>
              <Card
                name={card.name}
                likes={1100}
                mediaUrl={card.mediaUrl}
                user={card.user}
                price={card.price}
                currency={card.currency}
                timeLeft={card.timeLeft}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
