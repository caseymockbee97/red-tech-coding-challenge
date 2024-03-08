export interface Order {
  orderId: string;
  orderType: OrderType;
  customerName: string;
  createdDate: string;
  createdByUserName: string;
}

export type OrderType =
  | 'Standard'
  | 'SaleOrder'
  | 'PurchaseOrder'
  | 'TransferOrder'
  | 'ReturnOrder';
