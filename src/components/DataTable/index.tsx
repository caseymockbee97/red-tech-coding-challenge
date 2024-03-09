import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Checkbox } from '@mui/material';
import { Order } from '../../Types';
import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

interface DataTableProps {
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  orders: Order[];
}
export const DataTable = ({
  selectedIds,
  setSelectedIds,
  loading,
  orders,
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

  return (
    <StyledDataGrid
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
    />
  );
};

// Column settings that should be in all columns.
const UNIVERSAL_COL_DEF: Partial<GridColDef> = {
  editable: false,
  sortable: false,
  flex: 1,
  minWidth: 150,
  renderCell: ({ value }) => (
    <Typography variant="body2" fontWeight="500">
      {value}
    </Typography>
  ),
};

const StyledDataGrid = styled(DataGrid)`
  & .MuiCheckbox-root.Mui-checked svg {
    color: #eb3644;
  }
`;
