import { useEffect, useState } from "react";
import styles from "./Products.module.css";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                    setLoading(false);
                });
        }, 500); // optional delay for visible skeleton
    }, []);

    return (
        <div className={styles.container}>
            <h2>Featured Products</h2>

            <div className={styles.grid}>
                {loading
                    ? Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className={styles.skeletonCard}></div>
                    ))
                    : products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>₹{product.price}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
