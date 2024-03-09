import styled from '@emotion/styled';
import { Button, ButtonGroup, TextField } from '@mui/material';
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
      <ButtonGroup>
        <SearchField
          onChange={(e) => setSearchId(e.target.value)}
          size="small"
          variant="outlined"
          label="Customer Search"
        />
        <Button variant="contained">
          <Search />
        </Button>
      </ButtonGroup>
      <Button
        variant="contained"
        size="small"
        href="/createOrder"
        sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}
      >
        <Add fontSize="small" /> Create Order
      </Button>
      <Button
        variant="contained"
        size="small"
        disabled={!selectedIds.length}
        onClick={handleDeleteOrders}
        sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}
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
  flex-wrap: wrap;
  gap: 12px;
`;
