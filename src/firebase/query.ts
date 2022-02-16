import {
  collection, getDocs, query,
} from 'firebase/firestore';

import { db } from './initialize';

export const getProductsFirebase = async () => {
  // const docRef = doc(db, 'products');
  // const docSnap = await getDoc(docRef);
  //
  // if (docSnap.exists()) {
  //   console.log('Document data:', docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log('No such document!');
  // }
  const q = query(collection(db, 'products'));
  const querySnapshot = await getDocs(q);
  const result : any[] = [];
  querySnapshot.forEach((doc) => {
    const docItem : any = {
      id: doc.id,
      ...doc.data(),
    };
    result.push(docItem);
  });
  console.log(result);
  return result;
};
