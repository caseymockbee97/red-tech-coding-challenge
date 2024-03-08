import { useCallback, useEffect, useMemo, useState } from 'react';
import { getOrders } from '../../dataServices';
import { Order } from '../../Types';

interface UseGetOrdersProps {
  searchId: string;
}

export const useGetOrders = ({ searchId }: UseGetOrdersProps) => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleFetchOrders = useCallback(async () => {
    const response = await getOrders();
    if (!response.ok) {
      return;
    }

    const orders: Order[] = await response.json();

    setOrders(orders);
  }, []);

  useEffect(() => {
    setLoading(true);
    handleFetchOrders();
    setLoading(false);
  }, [handleFetchOrders]);

  const filteredOrders = useMemo(() => {
    if (!searchId) {
      return orders;
    }
    return orders.filter(({ orderId }) => orderId.includes(searchId));
  }, [orders, searchId]);

  return { loading, orders: filteredOrders };
};
