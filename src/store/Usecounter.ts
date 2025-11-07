import { create } from "zustand";

type Counter = {
  count: number;
  setCount: () => void;
};

export const useConter = create<Counter>()((set) => ({
  count: 1,
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));
