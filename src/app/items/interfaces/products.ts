export interface Product {
    id: string;
    title: string;
    price: number;
    original_price: number | null;
    currency_id: string;
    thumbnail: string;
    condition: string;
    free_shipping: boolean;
    location: string;
}
  
export interface ProductsResponse {
    categories: string[];
    items: Product[];
    totalPages: number;
    hasNextPage: boolean;
}