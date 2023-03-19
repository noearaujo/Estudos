import Link from "next/link";
import MyHead from "@/components/myhead";

export default function Products() {
    return (
        <>
            <MyHead title="Products"/>
            <h1>Products</h1>
            <ul>
                <li><Link href="/products/pants/bluepant">Blue Pant</Link></li>
                <li><Link href="/products/pants/redpant">Red Pant</Link></li>
                <li><Link href="/products/shirt">Shirt</Link></li>
            </ul>
        </>
    )
}