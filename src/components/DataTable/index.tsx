import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetOrders } from './useGetOrders';
// import { Checkbox } from '@mui/material';
import { OrderType } from '../../Types';
import React from 'react';

interface DataTableProps {
  searchId: string;
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  selectedOrderType: OrderType | '';
}
export const DataTable = ({
  searchId,
  selectedIds,
  setSelectedIds,
  selectedOrderType,
}: DataTableProps) => {
  const columns: GridColDef[] = [
    {
      ...UNIVERSAL_COL_DEF,
      field: 'orderId',
      headerName: 'Order Id',
      minWidth: 300,
    },
    {
      ...UNIVERSAL_COL_DEF,
      field: 'orderType',
      headerName: 'Order Type',
    },
    {
      ...UNIVERSAL_COL_DEF,
      field: 'customerName',
      headerName: 'Customer',
    },
    {
      ...UNIVERSAL_COL_DEF,
      field: 'createdDate',
      headerName: 'Creation Date',
      minWidth: 250,
    },
    {
      ...UNIVERSAL_COL_DEF,
      field: 'createdByUserName',
      headerName: 'Created By',
    },
  ];

  const { loading, orders } = useGetOrders({ searchId, selectedOrderType });

  return (
    <DataGrid
      rows={orders}
      columns={columns}
      getRowId={(row) => row.orderId}
      checkboxSelection
      disableColumnSelector
      disableColumnMenu
      hideFooter
      loading={loading}
      rowSelectionModel={selectedIds}
      // GridRowSelectionModel is (string | number)[] but we know all of our ids are strings.
      onRowSelectionModelChange={(ids) => setSelectedIds(ids as string[])}
      // TODO: Fix ref forwarding
      // slots={{ baseCheckbox: (props) => <Checkbox {...props} color="error" /> }}
    />
  );
};

// Column settings that should be in all columns.
const UNIVERSAL_COL_DEF: Partial<GridColDef> = {
  editable: false,
  sortable: false,
  flex: 1,
  minWidth: 150,
};
