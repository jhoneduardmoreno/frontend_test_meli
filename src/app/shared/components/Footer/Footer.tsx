import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                hecho con ❤️ por <a href="https://www.linkedin.com/in/jhoneduardmoreno/" target="_blank">Jhon Eduardo Moreno</a>
            </p>
        </footer>
    )
}

export default Footer;