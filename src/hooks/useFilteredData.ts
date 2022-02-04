import {ProductData} from "../ProductData";


export const useFilteredData = (id : string | undefined) => {
    const data = ProductData;
    const result = data.filter((item) => item.id === Number(id));

    return result.pop();
}
