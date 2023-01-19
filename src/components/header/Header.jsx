import {
  Grid,
  Container,
  InputBase,
  IconButton,
  Paper,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import classNames from 'classnames';
import styles from './Header.module.scss';
import Logo from '../logo/Logo';

export default function Header() {
  return (
    <Container maxWidth='false'>
      <Grid container className={classNames(styles.containerLogoAndSearch)}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Paper
            component='form'
            className={classNames(styles.containerSearch)}>
            <InputBase
              className={classNames(styles.searchElements)}
              placeholder='Find items, users and activities'
            />
            <IconButton type='button' aria-label='search'>
              <SearchIcon className={classNames(styles.searchElements)} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item>
          <Button className={styles.notSelectedButton}>Home</Button>
          <Button className={styles.notSelectedButton}>Activity</Button>
          <Button variant='contained'>Explore</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
