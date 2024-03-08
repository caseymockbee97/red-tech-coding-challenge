import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetOrders } from './useGetOrders';

interface DataTableProps {
  searchId: string;
}

export const DataTable = ({ searchId }: DataTableProps) => {
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
      headerName: 'Created Date',
      minWidth: 250,
    },
    {
      ...UNIVERSAL_COL_DEF,
      field: 'createdByUserName',
      headerName: 'Created By',
    },
  ];

  const { loading, orders } = useGetOrders({ searchId });

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
