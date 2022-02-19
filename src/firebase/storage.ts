import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage } from './initialize';

export const uploadImageToStorage = async (file : any) => {
  const imageRef = ref(storage, `images/${file.name}`);
  let imageUrl = '';
  try {
    const snapshot = await uploadBytesResumable(imageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    imageUrl = url;
  } catch (err) {
    console.log('uploadImageToStorageError', err);
  }
  console.log(imageUrl);
  return imageUrl;
};
