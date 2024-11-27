import { Metadata } from 'next';
import ContainerProductDetail from '../components/ContainerProductDetail/ContainerProductDetail';
import styles from './ProductDetail.module.scss';
import ContentPageLayout from '../../shared/layouts/ContentPageLayout/ContentPageLayout';

interface PropsProductPageDetailed {
  params: {id: string}
}

export const generateMetadata = ({params}: PropsProductPageDetailed): Metadata => {
  return {
    title: `Producto con el id ${params.id}`,
    robots: {
      follow: true,
      index: true
    }
  }
}


const ProductDetail = ({params}: PropsProductPageDetailed) => {
    const id = params.id
    if(!id || !id.startsWith("MLA")) throw new Error('Ese producto no existe')
    return (
        <ContentPageLayout>
            <main className={styles.main}>
                <ContainerProductDetail productId={id} />
            </main>
        </ContentPageLayout>
    )
}

export default ProductDetail;