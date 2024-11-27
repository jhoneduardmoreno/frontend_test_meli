import Link from 'next/link';
import styles from './styles/NotFound.module.scss';

export const metadata = {
  title: 'Página no encontrada | Tu Tienda',
  description: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
};

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Página no encontrada</h2>
      <p className={styles.description}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link href="/" className={styles.button}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;