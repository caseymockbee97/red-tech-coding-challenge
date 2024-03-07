import styled from '@emotion/styled';
import { AccountCircle, Settings } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

export const NavBar = () => {
  return (
    <AppBar color="transparent">
      <Toolbar>
        <InnerContainer $gap="12px">
          <Image src={logo} />
          <Typography variant="h5">Home</Typography>
        </InnerContainer>
        <Box sx={{ flexGrow: 1 }} />
        <InnerContainer $gap="0px">
          <IconButton>
            <Settings />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </InnerContainer>
      </Toolbar>
    </AppBar>
  );
};

const InnerContainer = styled.div<{ $gap: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ $gap }) => $gap};
`;

const Image = styled.img`
  height: 2.5rem;
`;
