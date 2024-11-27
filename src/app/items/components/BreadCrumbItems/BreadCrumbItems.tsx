import styles from './BreadCrumbItems.module.scss';
import Link from 'next/link';

interface BreadcrumbProps {
    categories: string[];
}

const BreadcrumbItems = ({ categories }: BreadcrumbProps) => {
    return (
        <div className={styles.breadcrumbs__wrapper}>
            <nav aria-label="Breadcrumb">
                <ol className={styles.breadcrumbs}>
                    {categories.map((category: string) => (
                        <li key={category} 
                            className={styles.breadcrumbs__item}>
                            <Link href={`/items?search=${category}`}>
                                <span>{category}</span>
                            </Link>
                            <span className={styles.breadcrumbs__separator} 
                                  aria-hidden="true">›</span>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default BreadcrumbItems;