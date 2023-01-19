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
    <Container maxWidth='false' sx={{ backgroundColor: '#0c0c14' }}>
      <Grid container alignItems='center' justifyContent='space-between'>
        <Grid item className={classNames(styles.containerLogoAndSearch)}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Paper
              component='form'
              sx={{ backgroundColor: '#181828' }}
              className={classNames(styles.containerSearch)}>
              <InputBase
                sx={{ p: 1, color: '#e1e1fc' }}
                placeholder='Find items, users and activities'
              />
              <IconButton
                sx={{ p: 1, color: '#e1e1fc' }}
                type='button'
                aria-label='search'>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        <Grid item>
          <Button>Home</Button>
          <Button>Activity</Button>
          <Button variant='contained'>Explore</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
