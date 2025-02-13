import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return response.data;
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await axios.get<Product>(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
  );
  return response.data;
};