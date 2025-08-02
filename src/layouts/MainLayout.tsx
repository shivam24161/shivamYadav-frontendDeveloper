import Header from "../component/Header";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>{children}</main>
        </div>
    );
}
