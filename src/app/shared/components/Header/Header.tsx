import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FormSearch } from "../FormSearch/FormSearch";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/assets/logo.svg" 
              alt="Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
          <FormSearch  />
        </nav>
      </div>
    </header>
  );
};

export default Header;
