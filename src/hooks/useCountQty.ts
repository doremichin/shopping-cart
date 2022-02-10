import { useRecoilState } from 'recoil';

import { cartState } from '../atoms/cartAtom';
import { IProduct } from '../interfaces/interface.Product';

export const useCountQty = () => {
  const [cartData, setCartData] = useRecoilState(cartState);

  const countQty = (id : number, type : string) => {
    // 깊은 복사를 해서 배열 속 객체의 값을 바꿔준다.
    const newData : IProduct[] = JSON.parse(JSON.stringify(cartData));
    const index = newData.findIndex((item) => item.id === id);
    switch (type) {
    case 'add':
      newData[index].qty += 1;
      setCartData(newData);
      break;
    case 'sub':
      // 1개 이하로 안내려가게 막음
      if (newData[index].qty === 1) break;
      newData[index].qty -= 1;
      setCartData(newData);
      break;
    default:
    }
  };
  return countQty;
};
