'use client'
import Image from "next/image";
import styles from "./Banner.module.scss";
import { useBanner } from "@/app/shared/hooks/useBanner";

interface BannerProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const Banner = ({ images }: BannerProps) => {
    const { currentImagePosition, goToImage, handlePause } = useBanner(images.length)
    
    return (
    <figure 
        className={styles.container}
        onMouseEnter={() => handlePause(true)}
        onMouseLeave={() => handlePause(false)}
    >
        <Image 
            src={images[currentImagePosition].url} 
            alt={images[currentImagePosition].alt} 
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1024px) 100vw, 
                   100vw"
            priority
        />
        <div className={styles.bullets}>
            {images.map((_, index) => (
                <button
                    key={index}
                    className={`${styles.bullet} ${index === currentImagePosition ? styles.active : ''}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Ir a imagen ${index + 1}`}
                />
            ))}
        </div>
    </figure>
  );
};

export default Banner;
