import { ProductCategory } from "../ProductCategory/ProductCategory";
import { Category } from "../../interfaces/categories";
import styles from "./CategoriesHome.module.scss";

const categories: Category[] = [
    {
        title: "OFERTAS DEL DÍA",
        imageUrl: "/assets/categories/category1.webp",
        url: "/items?search=ofertas",
        description: "Descuentos exclusivos para vos",
    },
    {
        title: "COMPRA INTERNACIONAL",
        imageUrl: "/assets/categories/category2.webp",
        url: "/items?search=compras+internacionales",
        description: "Compra productos de todo el mundo",
    },
    {
        title: "SUPERMERCADO",
        imageUrl: "/assets/categories/category3.webp",
        url: "/items?search=supermercado",
        description: "Todo para tu hogar",
    },
]


const CategoriesHome = () => {
    return (
        <section className={styles.categories}>
            {categories.map((category, index) => (
                <ProductCategory
                    key={index}
                    title={category.title}
                    imageUrl={category.imageUrl}
                    url={category.url}
                    description={category.description}
                />
            ))}
        </section>
    )
}

export default CategoriesHome;
