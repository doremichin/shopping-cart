import { atom } from 'recoil';

import { IProduct } from '../interfaces/interface.Product';

export const cartState = atom<IProduct[]>({
  key: 'cartState',
  default: [],
});
