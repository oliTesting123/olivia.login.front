export class ProductsModel {
    id?: number;
    name?: string;
    decription?: string;
    code?: string;
    price?: string;
  
    constructor(product: Partial<ProductsModel>) {
      Object.assign(this, product);
    }
  }