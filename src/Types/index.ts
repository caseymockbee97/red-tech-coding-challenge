export interface Order {
  orderId: string;
  orderType: OrderType;
  customerName: string;
  createdDate: string;
  createdByUserName: string;
}

export interface CreateOrder
  extends Pick<Order, 'customerName' | 'createdByUserName'> {
  orderType: '' | OrderType;
}

export type OrderType =
  | 'Standard'
  | 'SaleOrder'
  | 'PurchaseOrder'
  | 'TransferOrder'
  | 'ReturnOrder';
