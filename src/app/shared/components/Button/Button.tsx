'use client'
import styles from './Button.module.scss'
import confetti from 'canvas-confetti'

interface BuyButtonProps {
    productTitle: string;
    productPrice: number;
}

const BuyButton = ({ productTitle, productPrice }: BuyButtonProps) => {
    const handlePurchase = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        setTimeout(() => {
            alert(`¡Gracias por tu compra!\nHas comprado: ${productTitle}\nPrecio: $${productPrice}`);
        }, 100);
    }

    return (
        <button className={styles.buyButton} onClick={handlePurchase}>
            Comprar
        </button>
    );
}

export default BuyButton;