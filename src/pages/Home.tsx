import Products from "../component/Products";
import styles from "./Page.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Welcome Home</h1>
            <p>This is a paragraph inside the Home page.</p>
            <button>Click Me</button>
            <Products />
        </div>
    );
}
