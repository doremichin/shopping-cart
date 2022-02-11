# 장바구니 만들기

## 스택

- CRA typescript
- Recoil
- MUI
- OAuth/react-google-login

### mock data, atom
```typescript
//ProductData.ts
//mock data 만들기

export const ProductData = [
    {
        id : 1,
        title : '신라면',
        price : 1000,
        thumb : 'http://img.danawa.com/prod_img/500000/839/239/img/1239839_1.jpg?shrink=330:330&_v=20210914125715',
        qty :0,
        rating : 4
    },
    ...
]


//cartAtom.ts
//global영역에서 관리할 상태 만들기
export const cartState = atom<IProduct[]>({
    key: 'cartState',
    default: [] ,
});

```
### MainPage - 상품리스트
```typescript
//MainContainer.tsx
//상품리스트를 뿌려주는 페이지
function MainContainer () {
    //atom의 상태를 가져온다
    const [cart, setCart] = useRecoilState(cartState)
    //상품 데이터 가져온다.
    const productData  : IProduct[] = ProductData;

    //장바구니에 상품을 추가하는 로직
    const addCart = (item : IProduct) => {
        const id = item.id
        const index = cart.findIndex((data) => data.id === id)
        //요소가 없으면 -1, 있으면 0 이상
        if(index === -1) {
            setCart([
                ...cart,
                {
                    ...item,
                    qty : 1
                }
            ])
        }
    }
```

### CartPage - 장바구니
```typescript
//CartContainer.tsx
function CartContainer () {
    //atom 상태를 가져온다
    const [cartData, setCartData] = useRecoilState(cartState);

    //장바구니에서 상품 삭제하는 로직
    const handleDelete = (id: number) => {
        //상품의 고유 id를 활용
        const newData = cartData.filter((item) => item.id !== id);
        setCartData(newData)
    }
    ...
}

--------------------------------------------------------------
    
//useCountQty.ts
//id, type을 받아서 id가 일치하는 데이터의 값을 뺄지 더할지 결정함
export const useCountQty = () => {
    const [cartData, setCartData] = useRecoilState(cartState);

    const countQty = (id : number , type : string) => {
        //깊은 복사를 해서 배열 속 객체의 값을 바꿔준다.
        const newData : IProduct[] = JSON.parse(JSON.stringify(cartData))
        const index = newData.findIndex((item) => item.id===id)
        switch (type) {
            case 'add' :
                newData[index].qty += 1
                setCartData(newData);
                break
            case 'sub' :
                //1개 이하로 안내려가게 막음
                if(newData[index].qty === 1) break;
                newData[index].qty -= 1
                setCartData(newData);
                break
            default : return;
        }
    }
    return countQty;
}
```
