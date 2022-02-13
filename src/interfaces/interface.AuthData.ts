import { IProduct } from './interface.Product';

export interface IAuthData {
    email : string
    familyName : string
    givenName : string
    googleId : string
    imageUrl : string
    name : string
    cart? : IProduct[];
}
