import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Order } from '../../Types';
import { UseFormRegister } from 'react-hook-form';

interface OrderSelectProps {
  register: UseFormRegister<Omit<Order, 'orderId' | 'createdDate'>>;
}

export const OrderSelect = ({ register }: OrderSelectProps) => {
  return (
    <FormControl size="small">
      <InputLabel id="order-type-select-label">Order Type</InputLabel>
      <Select
        sx={{ width: '300px' }}
        {...register('orderType')}
        label-id="order-type-select-label"
        size="small"
        label="Order Type"
        required
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
