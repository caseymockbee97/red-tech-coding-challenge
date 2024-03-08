import { Order, OrderType } from '../Types';

export const getOrders = async () => {
  const response = fetch(`${import.meta.env.VITE_API_ENDPOINT}/Orders`, {
    method: 'GET',
    headers: {
      ApiKey: import.meta.env.VITE_API_KEY,
    },
  });
  return response;
};

// TODO: Update with Type
export const getOrdersByType = async (orderType: OrderType) => {
  const response = fetch(
    `${import.meta.env.VITE_API_ENDPOINT}/Orders/ByType?orderType=${orderType}`,
    {
      method: 'GET',
      headers: {
        ApiKey: import.meta.env.VITE_API_KEY,
      },
    }
  );
  return response;
};

// TODO: Update with Type
export const addOrder = async (order: Order) => {
  const response = fetch(`${import.meta.env.VITE_API_ENDPOINT}`, {
    method: 'POST',
    headers: {
      ApiKey: import.meta.env.VITE_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  return response;
};

export const deleteOrders = async (orders: string[]) => {
  const response = fetch(`${import.meta.env.VITE_API_ENDPOINT}`, {
    method: 'GET',
    headers: {
      ApiKey: import.meta.env.VITE_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orders),
  });
  return response;
};
