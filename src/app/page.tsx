import BottomBannerHome from "./items/components/BottomBannerHome/BottomBannerHome";
import CategoriesHome from "./items/components/CategoriesHome/CategoriesHome";
import Banner from "./shared/components/Banner/Banner";
import ContentPageLayout from "./shared/layouts/ContentPageLayout/ContentPageLayout";

export default function Home() {
  const images = [
    {
      url: "/assets/banner/image1-banner.webp",
      alt: "Imagen 1 banner",
    },
    {
      url: "/assets/banner/image2-banner.webp",
      alt: "Imagen 2 banner",
    },
    {
      url: "/assets/banner/image3-banner.webp",
      alt: "Imagen 3 banner",
    }, 
  ];

  return (
    <main>
      <Banner images={images} />
      <ContentPageLayout>
        <>
          <CategoriesHome />
          <BottomBannerHome />
        </>
      </ContentPageLayout>
    </main>
  );
}
