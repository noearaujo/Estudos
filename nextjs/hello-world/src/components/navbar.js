import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/todos">Todos</Link>
            <Link href="/todos-old">Old Todos</Link>
            <Link href="/about">About</Link>
        </div>
    )
}