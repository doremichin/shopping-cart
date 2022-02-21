import {
  collection, getDocs, query, doc, setDoc,
} from 'firebase/firestore';

import { db } from './initialize';
import { FormInputs } from '../views/add/components/AddProductForm';

export const getProductsFirebase = async () => {
  const q = query(collection(db, 'products'));
  const querySnapshot = await getDocs(q);
  const result : any[] = [];
  querySnapshot.forEach((document) => {
    const docItem : any = {
      id: document.id,
      qty: 1,
      ...document.data(),
    };
    result.push(docItem);
  });
  console.log(result);
  return result;
};

export const setProductsFirebase = async (data : FormInputs) => {
  const newProductRef = doc(collection(db, 'products'));
  await setDoc(newProductRef, data);
};
