import { useCallback, useEffect, useMemo, useState } from 'react';
import { getOrders, getOrdersByType } from '../../dataServices';
import { Order, OrderType } from '../../Types';

interface UseGetOrdersProps {
  searchId: string;
  selectedOrderType: OrderType | '';
}

export const useGetOrders = ({
  searchId,
  selectedOrderType,
}: UseGetOrdersProps) => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const handleFetchOrders = useCallback(async () => {
    let response;

    if (selectedOrderType) {
      response = await getOrdersByType(selectedOrderType);
    } else {
      response = await getOrders();
    }

    if (!response.ok) {
      console.log(response.json());
      return;
    }

    const orders: Order[] = await response.json();

    setOrders(orders);
  }, [selectedOrderType]);

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
