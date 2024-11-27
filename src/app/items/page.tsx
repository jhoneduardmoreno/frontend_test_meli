import ContentPageLayout from "../shared/layouts/ContentPageLayout/ContentPageLayout"
import ProductContainerItems from "./components/ProductContainerItems/ProductContainerItems"

interface PropsItems {
    searchParams: {
      search?: string,
      limit?: string
      offset?: string
    }
}

export const metadata = {
    title: "Items | Mercado Libre Clon",
    description: "Explora nuestra amplia selección de productos. Encuentra ofertas increíbles, vendedores confiables y la mejor experiencia de compra en línea.",
    robots: {
        index: true,
        follow: true,
    }
}

const Items = async ({ searchParams }: PropsItems) => {
    const { search, limit, offset } = searchParams;

    return (
        <ContentPageLayout>
            <ProductContainerItems search={search} limit={limit} offset={offset} />
        </ContentPageLayout>
    )
}

export default Items;