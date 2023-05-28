import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import css from './WelcomeSection.module.css';

export const WelcomeSection = () => {
  const name = useSelector(state => state.auth.user.name);
  return <Box className={css.welcome}>Hello, {name}!</Box>;
};
