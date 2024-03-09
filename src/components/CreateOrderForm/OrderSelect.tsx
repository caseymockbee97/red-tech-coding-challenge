import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { CreateOrder } from '../../Types';
import { Control, Controller } from 'react-hook-form';

interface OrderSelectProps {
  control: Control<CreateOrder>;
}

export const OrderSelect = ({ control }: OrderSelectProps) => {
  return (
    <FormControl size="small">
      <InputLabel id="order-type-select-label">Order Type</InputLabel>
      <Controller
        control={control}
        name="orderType"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            sx={{ width: '300px' }}
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
        )}
      />
    </FormControl>
  );
};
