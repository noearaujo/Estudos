import Link from "next/link"

export default function Products() {
    return (
        <>
            <h1>Products</h1>
            <ul>
                <li><Link href="/products/pants/bluepant">Blue Pant</Link></li>
                <li><Link href="/products/pants/redpant">Red Pant</Link></li>
                <li><Link href="/products/shirt">Shirt</Link></li>
            </ul>
        </>
    )
}