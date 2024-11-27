import styles from './ContentPageLayout.module.scss';

interface ContentPageLayoutProps {
  children: React.ReactNode;
}

export default function ContentPageLayout({ children }: ContentPageLayoutProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}