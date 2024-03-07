import { DataGrid, GridColDef } from '@mui/x-data-grid';

const TEMP_DATA = [
  {
    orderId: 'dae99114-301e-42b6-8a11-ff77f24673d0',
    orderType: 'ReturnOrder',
    customerName: 'Nathan Hill',
    createdDate: 'Monday, 04 March 2024',
    createdByUserName: 'Brad Stevens',
  },
  {
    orderId: 'b40ef31c-a74e-4528-96ef-89ee7616dc26',
    orderType: 'Standard',
    customerName: 'Samuel',
    createdDate: 'Monday, 04 March 2024',
    createdByUserName: 'Thomas wells',
  },
  {
    orderId: '0fd118a5-cf49-4e34-a051-a342670c8be3',
    orderType: 'PurchaseOrder',
    customerName: 'Peter Pan',
    createdDate: 'Monday, 04 March 2024',
    createdByUserName: 'Hayley Ross',
  },
  {
    orderId: '268caa3f-6e26-48ea-afd4-f989028adf4c',
    orderType: 'SaleOrder',
    customerName: 'Joe Ingles',
    createdDate: 'Tuesday, 05 March 2024',
    createdByUserName: 'Edward McMan',
  },
  {
    orderId: '9aa857bb-8984-455a-baf4-00026bc6b6a6',
    orderType: 'ReturnOrder',
    customerName: 'Jakub Pawlowski',
    createdDate: 'Tuesday, 05 March 2024',
    createdByUserName: 'Samuel',
  },
];

export const DataTable = () => {
  const columns: GridColDef[] = [
    { field: 'orderId', headerName: 'Order Id', editable: false, flex: 1 },
    { field: 'orderType', headerName: 'Order Type', editable: false, flex: 1 },
    { field: 'customerName', headerName: 'Customer', editable: false, flex: 1 },
    {
      field: 'createdDate',
      headerName: 'Created Date',
      editable: false,
      flex: 1,
    },
    {
      field: 'createdByUserName',
      headerName: 'Created By',
      editable: false,
      flex: 1,
    },
  ];
  return (
    <DataGrid
      rows={TEMP_DATA}
      columns={columns}
      getRowId={(row) => row.orderId}
      checkboxSelection
    />
  );
};
