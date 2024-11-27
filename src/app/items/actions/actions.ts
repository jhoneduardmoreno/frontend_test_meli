import { ProductDetail } from "../interfaces/productDetail";
import { ProductsResponse } from "../interfaces/products";
import { notFound } from 'next/navigation';

export const fetchProducts = async (search?: string, limit?: string, offset?: string): Promise<ProductsResponse> => {
    try {
        const params = new URLSearchParams();
        
        if (search) params.append('query', search);
        if (limit) params.append('limit', limit.toString());
        if (offset) params.append('offset', offset.toString());
        
        const queryString = params.toString();
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products${queryString ? `?${queryString}` : ''}`;
        
        const response = await fetch(url);
        
        if (response.status === 404) {
            notFound();
        }
        
        return response.json();
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error;
    }
}

export const fetchProductDetail = async (productId: string): Promise<ProductDetail> => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`;
        const response = await fetch(url);
        
        if (response.status === 404) {
            notFound();
        }
        
        return response.json();
    } catch (error) {
        console.error('Error al obtener el detalle del producto:', error);
        throw error;
    }
}
