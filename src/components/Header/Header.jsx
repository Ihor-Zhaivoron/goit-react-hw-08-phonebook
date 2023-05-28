import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { WelcomeSection } from '../WelcomeSection/WelcomeSection';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Navigation />
          <WelcomeSection />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
