export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  petType: 'cat' | 'dog';
  category: 'cat food' | 'cat toy' | 'dog food' | 'dog toy';
  brand: string;
  stock: number;
  isActive: boolean;
  sold: number;
  isFeatured: boolean;
}

export interface ProductResponse extends Product {}

export interface CreateProductPayload extends Omit<Product, '_id' | 'sold'> {}

export interface UploadProductImageResponse {
  imageUrl: string;
}
