import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href={"/"}className={styles.logo}>
                <Image src={"/images/pokeball.png"} width={30} height={30} alt="PokeNext" />
                <h1>Poke<span>Next</span></h1>
            </Link>
            <ul className={styles.menu}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
        </nav>
    )
}