import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { OrderType } from '../../Types';

interface OrderSelectProps {
  selectedOrderType: '' | OrderType;
  setSelectedOrderType: React.Dispatch<React.SetStateAction<'' | OrderType>>;
}

export const OrderSelect = ({
  selectedOrderType,
  setSelectedOrderType,
}: OrderSelectProps) => {
  return (
    <FormControl size="small">
      <InputLabel id="order-type-select-label">Order Type</InputLabel>
      <Select
        sx={{ width: '300px' }}
        value={selectedOrderType}
        onChange={(e) => setSelectedOrderType(e.target.value as OrderType | '')}
        label-id="order-type-select-label"
        id="order-type-select"
        size="small"
        label="Order Type"
      >
        <MenuItem value="">any</MenuItem>
        <MenuItem value="Standard">Standard</MenuItem>
        <MenuItem value="SaleOrder">SaleOrder</MenuItem>
        <MenuItem value="PurchaseOrder">PurchaseOrder</MenuItem>
        <MenuItem value="TransferOrder">TransferOrder</MenuItem>
        <MenuItem value="ReturnOrder">ReturnOrder</MenuItem>
      </Select>
    </FormControl>
  );
};
