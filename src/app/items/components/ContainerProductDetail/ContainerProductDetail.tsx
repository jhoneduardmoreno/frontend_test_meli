import Button from "../../../shared/components/Button/Button";
import { fetchProductDetail } from "../../actions/actions";
import styles from './ContainerProductDetail.module.scss'

interface PropsProductCardContainerDetailedProduct {
    productId: string
}

const ContainerProductDetail = async ({productId}: PropsProductCardContainerDetailedProduct) => {
    const productDetail = await fetchProductDetail(productId)
    
    return (
        <article className={styles.container}>
            <div className={styles.status}>
                {productDetail.condition} - {productDetail.quantity} vendidos
            </div>
            <h1 className={styles.title}>{productDetail.title}</h1>
            <div className={styles.imageContainer}>
                <img 
                    src={productDetail.picture} 
                    alt={`Imagen de ${productDetail.title}`}
                    loading="eager"
                />
            </div>
            <div className={styles.priceContainer}>
                <span className={styles.price}>
                    <span>$ {productDetail.price}</span>
                </span>
                <Button 
                    productTitle={productDetail.title}
                    productPrice={productDetail.price}
                />
            </div>
            <div className={styles.description}>
                <h2>Descripción del producto</h2>
                <p>{productDetail.description}</p>
            </div>
        </article>
    )
}

export default ContainerProductDetail;