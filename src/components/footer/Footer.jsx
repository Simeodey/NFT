import { Grid, Container, Button } from '@mui/material';
import classNames from 'classnames';
import styles from './Footer.module.scss';
import Logo from '../logo/Logo';

export default function Footer() {
  return (
    <Container maxWidth="false">
      <Grid container className={classNames(styles.containerFooter)}>
        <Grid item>
          <Logo type={'muted'} />
        </Grid>
        <Grid item>
          <span className={classNames(styles.textFooter)}>
            Bum All Rights Reserved 2022
          </span>
        </Grid>
        <Grid item>
          <Button className={styles.notSelectedButton}>Privacy Policy</Button>
          <Button className={styles.notSelectedButton}>Cookie Policy</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
