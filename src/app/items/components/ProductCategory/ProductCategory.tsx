import Image from 'next/image'
import Link from 'next/link'
import styles from './ProductCategory.module.scss'

interface ProductCategoryProps {
  title: string
  imageUrl: string
  url: string
  description: string
}

export const ProductCategory = ({ title, imageUrl, url, description }: ProductCategoryProps) => {
  return (
    <Link href={url} className={styles.card} aria-label={`Ver categoría ${title}`}>
      <article className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={`Categoría de producto: ${title} - ${description}`}
            fill
            sizes="(max-width: 768px) 100%, 
                   (max-width: 1200px) 50%,
                   33%"
            className={styles.image}
            priority={true}
            loading="eager"
          />
        </div>
        <p className={styles.description}>{description}</p>
      </article>
    </Link>
  )
}
