import styled from '@emotion/styled';
import { DataTable } from '../components';
import { useCallback, useState } from 'react';
import { OrderType } from '../Types';
import { OrdersToolbar } from '../components/OrdersToolbar';
import { useGetOrders } from '../components/DataTable/useGetOrders';
import { deleteOrders } from '../dataServices';
import { Snackbar } from '@mui/material';

export const OrdersPage = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [searchId, setSearchId] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedOrderType, setSelectedOrderType] = useState<OrderType | ''>(
    ''
  );

  const { loading, orders, handleFetchOrders } = useGetOrders({
    searchId,
    selectedOrderType,
  });

  const handleDeleteOrders = useCallback(async () => {
    const response = await deleteOrders(selectedIds);
    if (response.ok) {
      handleFetchOrders();
      setSelectedIds([]);
      setToastMessage('Orders Deleted');
    } else {
      setToastMessage('An error occurred deleting orders.');
    }
  }, [handleFetchOrders, selectedIds]);

  return (
    <Container>
      <OrdersToolbar
        handleDeleteOrders={handleDeleteOrders}
        setSearchId={setSearchId}
        selectedIds={selectedIds}
        selectedOrderType={selectedOrderType}
        setSelectedOrderType={setSelectedOrderType}
      />
      <DataTable
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        loading={loading}
        orders={orders}
      />
      <Snackbar
        open={!!toastMessage}
        autoHideDuration={2000}
        onClose={() => setToastMessage('')}
        message={toastMessage}
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
