import { FC } from 'react';
import Link from 'next/link';
import { Product } from '../../interfaces/products';
import styles from './ProductCardItems.module.scss';

interface PropsProductCardItems {
    item: Product;
}

const ProductCardItems: FC<PropsProductCardItems> = ({ item }) => {
    return (
        <Link href={`/items/${item.id}`} className={styles.productCardLink}>
            <article className={styles.productCard} itemScope>
                <img 
                    src={item.thumbnail} 
                    alt={`${item.title} - ${item.location}`} 
                    className={styles.productImage}
                    loading="lazy"
                />
                <div className={styles.productInfo}>
                    <meta content={item.id?.toString()} />
                    <div>
                        <span className={styles.productPrice}>
                            $ {item.price?.toLocaleString() ?? 'Precio no disponible'}
                        </span>
                        {item.free_shipping && (
                            <img src="/assets/shipping_small.png" alt="Free Shipping" className={styles.freeShipping} />
                        )}
                    </div>
                    <h2 className={styles.productTitle} >
                        {item.title}
                    </h2>
                    <span className={styles.location} >
                        {item.location}
                    </span>
                </div>
            </article>
        </Link>
    )
}

export default ProductCardItems;
