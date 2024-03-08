import styled from '@emotion/styled';
import { DataTable } from '../components';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Add, Delete, Search } from '@mui/icons-material';
import { useState } from 'react';
import { OrderType } from '../Types';

export const OrdersPage = () => {
  const [searchId, setSearchId] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedOrderType, setSelectedOrderType] = useState<OrderType | ''>(
    ''
  );

  return (
    <Container>
      <Toolbar>
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
        <Button variant="contained" size="small">
          <Add fontSize="small" /> Create Order
        </Button>
        <Button variant="contained" size="small" disabled={!selectedIds.length}>
          <Delete fontSize="small" /> Delete Selected
        </Button>
        <FormControl size="small">
          <InputLabel id="order-type-select-label">Order Type</InputLabel>
          <Select
            sx={{ width: '300px' }}
            value={selectedOrderType}
            onChange={(e) =>
              setSelectedOrderType(e.target.value as OrderType | '')
            }
            label-id="order-type-select-label"
            id="order-type-select"
            size="small"
            label="Order Type"
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="SaleOrder">SaleOrder</MenuItem>
            <MenuItem value="PurchaseOrder">PurchaseOrder</MenuItem>
            <MenuItem value="TransferOrder">TransferOrder</MenuItem>
            <MenuItem value="ReturnOrder">ReturnOrder</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
      <DataTable
        searchId={searchId}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        selectedOrderType={selectedOrderType}
      />
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
  width: 300px;
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
