import styled from '@emotion/styled';
import { Button, InputAdornment, TextField } from '@mui/material';
import { Add, Delete, Search } from '@mui/icons-material';
import { OrderType } from '../../Types';
import { OrderSelect } from './OrderSelect';

interface OrdersToolbarProps {
  handleDeleteOrders: () => Promise<void>;
  setSearchId: React.Dispatch<React.SetStateAction<string>>;
  selectedIds: string[];
  selectedOrderType: '' | OrderType;
  setSelectedOrderType: React.Dispatch<React.SetStateAction<'' | OrderType>>;
}

export const OrdersToolbar = ({
  handleDeleteOrders,
  selectedIds,
  setSearchId,
  selectedOrderType,
  setSelectedOrderType,
}: OrdersToolbarProps) => {
  return (
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
      <Button variant="contained" size="small" href="/addOrder">
        <Add fontSize="small" /> Create Order
      </Button>
      <Button
        variant="contained"
        size="small"
        disabled={!selectedIds.length}
        onClick={handleDeleteOrders}
      >
        <Delete fontSize="small" /> Delete Selected
      </Button>
      <OrderSelect
        selectedOrderType={selectedOrderType}
        setSelectedOrderType={setSelectedOrderType}
      />
    </Toolbar>
  );
};

const SearchField = styled(TextField)`
  width: 300px;
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
