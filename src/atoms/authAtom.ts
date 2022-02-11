import { atom } from 'recoil';

import { IAuthData } from '../interfaces/interface.AuthData';

export const authCheckerAtom = atom<boolean>({
  key: 'authCheckerState',
  default: false,
});
export const authDataAtom = atom<IAuthData>({
  key: 'authDataState',
  default: {
    email: '',
    familyName: '',
    givenName: '',
    googleId: '',
    imageUrl: '',
    name: '',
  },
});
