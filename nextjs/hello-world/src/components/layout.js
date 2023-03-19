import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/Layout.module.css"

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>{children}</div>
            <Footer />
        </>
    )
}