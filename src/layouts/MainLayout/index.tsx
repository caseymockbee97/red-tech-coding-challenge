import styled from '@emotion/styled';
import { NavBar } from '../../components';
import { Toolbar } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container>
      <NavBar />
      {/* Adding the empty toolbar prevents the Navbar from covering content. */}
      <Toolbar />
      {children}
    </Container>
  );
};

const Container = styled.div``;
