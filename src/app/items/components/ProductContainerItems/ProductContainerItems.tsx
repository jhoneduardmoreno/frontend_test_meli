import { FC } from 'react';
import styles from './ProductContainerItems.module.scss';
import Link from 'next/link';
import { fetchProducts } from "../../actions/actions";
import BreadcrumbItems from '../BreadCrumbItems/BreadCrumbItems';
import ProductCardItems from '../ProductCardItems/ProductCardItems';

interface PropsProductContainerItems {
    search?: string;
    limit?: string;
    offset?: string;
}

const ProductContainerItems: FC<PropsProductContainerItems> = async ({ search, limit = "10", offset = "0" }) => {
    const { categories, items, totalPages, hasNextPage } = await fetchProducts(search, limit, offset);
    
    const currentPage = Math.floor(Number(offset) / Number(limit)) + 1;
    
    const renderPagination = () => {
        return (
            <div className={styles.pagination}>
                <Link 
                    href={`/items?search=${search}&limit=${limit}&offset=${Number(offset) - Number(limit)}`}
                    className={styles.pageButton}
                    style={{ visibility: currentPage === 1 ? 'hidden' : 'visible' }}
                >
                    Anterior
                </Link>
                
                <span className={styles.currentPage}>
                    Página {currentPage} de {totalPages}
                </span>
                
                <Link 
                    href={`/items?search=${search}&limit=${limit}&offset=${Number(offset) + Number(limit)}`}
                    className={styles.pageButton}
                    style={{ visibility: hasNextPage ? 'visible' : 'hidden' }}
                >
                    Siguiente
                </Link>
            </div>
        );
    };

    return (
        <>
            <BreadcrumbItems categories={categories} />
            <div className={styles.productsContainer}>
                {items.map((item) => (
                    <ProductCardItems item={item} key={item.id} />
                ))}
                {renderPagination()}
            </div>
        </>
    );
};

export default ProductContainerItems;