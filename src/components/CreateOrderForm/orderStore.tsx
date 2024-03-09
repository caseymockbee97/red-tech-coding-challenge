import { create } from 'zustand';
import { CreateOrder } from '../../Types';

interface OrderStore {
  order: CreateOrder;
  setOrder: (order: CreateOrder) => void;
  reset: () => void;
}

const INITIAL_STATE: CreateOrder = {
  createdByUserName: '',
  customerName: '',
  orderType: '',
};

export const orderStore = create<OrderStore>()((set) => ({
  order: INITIAL_STATE,
  setOrder: (order) => {
    console.log(order);
    set({ order });
  },
  reset: () => set({ order: { ...INITIAL_STATE } }),
}));
