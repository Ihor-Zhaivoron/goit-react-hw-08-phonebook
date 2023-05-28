import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Navigation } from '../Navigation/Navigation';
import { WelcomeSection } from '../WelcomeSection/WelcomeSection';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxwidth="md">
        <Toolbar disableGutters>
          <Navigation />
          <WelcomeSection />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
