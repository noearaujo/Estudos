import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>404</h1>
            <p>Essá página não foi encontrada</p>
            <Link href={"/"}>Voltar para  Home</Link>
        </>
    )
}