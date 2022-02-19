import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCZftbRwKZej4zlPyr0MGcKYEoh_SO-rx8',
  authDomain: 'cart-app-d69af.firebaseapp.com',
  projectId: 'cart-app-d69af',
  storageBucket: 'cart-app-d69af.appspot.com',
  messagingSenderId: '683772481111',
  appId: '1:683772481111:web:f5ca988297bb1113af9d12',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
