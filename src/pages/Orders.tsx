import styled from '@emotion/styled';
import { DataTable } from '../components';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';

export const OrdersPage = () => {
  const [searchId, setSearchId] = useState('');

  return (
    <Container>
      <SearchField
        onChange={(e) => setSearchId(e.target.value)}
        size="small"
        variant="outlined"
        placeholder="Customer Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <DataTable searchId={searchId} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;

const SearchField = styled(TextField)`
  width: 350px;
`;
